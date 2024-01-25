import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ConflictException, Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { generateOTP } from 'src/utils/otp-generator';
import { MailService } from 'src/mail.service';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersService: Repository<User>,
    private readonly mailService: MailService,
    private jwtService: JwtService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { fullname, username, email, password } = createUserDto;

    // Check if the username is already taken
    const existingUserByUsername = await this.usersService.findOne({
      where: { username },
    });
    if (existingUserByUsername) {
      throw new ConflictException('Username is already taken');
    }

    // Check if the email is already registered
    const existingUserByEmail = await this.usersService.findOne({
      where: { email },
    });
    if (existingUserByEmail) {
      throw new ConflictException('Email is already registered');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = generateOTP();

    // Save user to the database
    const createdUser = this.usersService.create({
      fullname,
      username,
      email,
      password: hashedPassword,
      otp,
    });

    const user = await this.usersService.save(createdUser);

    // Send OTP via email
    await this.mailService.sendEmail(
      email,
      'OTP for Registration',
      `Your OTP for registration is: ${otp}`,
    );

    return { user };
  }

  async findAll() {
    const users = await this.usersService.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersService.findOne({
      where: { id },
    });
    return user;
  }

  async findByUsername(username: string) {
    const user = await this.usersService.findOne({
      where: { username },
    });
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersService.findOne({
      where: { email },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.usersService.update(id, updateUserDto);
    return updatedUser;
  }
}
