import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  UseGuards,
  HttpCode,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/utils/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiBody({ type: CreateUserDto })
  @HttpCode(HttpStatus.CREATED)
  async register(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    try {
      const result = await this.usersService.createUser(createUserDto);
      return {
        message: 'User registered successfully',
        data: result,
      };
    } catch (error) {
      return {
        message: 'Error registering user',
        error: error.message,
      };
    }
  }

  // @Post('verify-otp/:email')
  // async verifyOtp(
  //   @Param('email') email: string,
  //   @Body('otp') otp: string,
  // ): Promise<{ message: string }> {
  //   await this.usersService.verifyOtp(email, otp);
  //   return { message: 'OTP verified successfully' };
  // }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Users',
    type: User,
  })
  async findAll() {
    try {
      const users = await this.usersService.findAll();
      return {
        message: 'User registered successfully',
        data: users,
      };
    } catch (error) {
      return {
        message: 'Error registering user',
        error: error.message,
      };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiParam({ name: 'username', type: Number })
  @ApiResponse({
    status: 200,
    description: 'User with found',
    type: User,
  })
  async findOne(@Param('id') id: number) {
    const user = await this.usersService.findOne(id);
    return user;
  }

  // @UseGuards(JwtAuthGuard)
  @Get('username/:username')
  @ApiOperation({ summary: 'Get a user by username' })
  @ApiParam({ name: 'username', type: String })
  @ApiResponse({
    status: 200,
    description: 'User name found',
    type: User,
  })
  async findByUsername(@Param('username') username: string) {
    const user = await this.usersService.findByUsername(username);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiParam({
    name: 'userId',
    type: Number,
    description: 'ID of the users',
  })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: 'Discount updated successfully',
    type: User,
  })
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    const updatedUser = await this.usersService.update(id, updateUserDto);
    return updatedUser;
  }
}
