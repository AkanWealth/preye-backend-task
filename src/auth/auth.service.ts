import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { VerificationResult } from 'src/users/dto/interface/user.interface';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

dotenv.config();

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    @Inject('USERS_SERVICE') private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.usersService.findByEmail(email);

      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, ...result } = user;
          return result;
        }
      }
    } catch (error) {
      this.logger.error(`Error in validateUser: ${error.message}`);
      throw error;
    }

    return null;
  }

  async login(user: any) {
    try {
      const payload = { email: user.email, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      this.logger.error(`Error in login: ${error.message}`);
      throw error;
    }
  }

  async verifyOtp(email: string, otp: string): Promise<VerificationResult> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.otp === null) {
      throw new BadRequestException('Invalid OTP');
    }

    const isOtpValid = (user.otp = otp);

    if (!isOtpValid) {
      throw new BadRequestException('Invalid OTP');
    }

    // Clear the OTP after verification (optional)
    user.otp = null;
    const updateResult = await this.usersService.update(user.id, {
      otp: null,
    } as unknown as UpdateUserDto);

    if (updateResult.affected === 0) {
      throw new BadRequestException('Failed to clear OTP');
    }

    const payload = {
      username: user.username,
      email: user.email,
      sub: user.id,
    };

    return {
      verified: true,
      access_token: this.jwtService.sign(payload),
    };
  }
}
