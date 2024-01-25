import { IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  fullname: string;

  @IsOptional()
  @MinLength(6)
  @ApiProperty()
  password: string;
}
