import {
  BadRequestException,
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { VerificationResult } from 'src/users/dto/interface/user.interface';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    try {
      const user = await this.authService.validateUser(
        loginDto.email,
        loginDto.password,
      );

      if (!user) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }

      const token = await this.authService.login(user);
      return { user, token };
    } catch (error) {
      console.log(error.message);
      throw new HttpException('Login failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('verify-otp')
  async verifyOtp(
    @Body() verifyOtpDto: { email: string; otp: string },
  ): Promise<VerificationResult> {
    try {
      const result = await this.authService.verifyOtp(
        verifyOtpDto.email,
        verifyOtpDto.otp,
      );
      return result;
    } catch (error) {
      // Handle different error types as needed
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      } else {
        throw new BadRequestException('Failed to verify OTP');
      }
    }
  }
}
