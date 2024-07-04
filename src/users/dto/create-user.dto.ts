import { IsArray, IsEmail, IsNumber, IsString } from 'class-validator';
import { UserDto } from './user.dto';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  age: number;
}
