import { IsString } from 'class-validator';

export class CreateUserErrorDto {
  @IsString()
  error: string;

  @IsString()
  message: string;
}
