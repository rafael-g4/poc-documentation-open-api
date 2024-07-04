import { IsNumber } from 'class-validator';

export class IdentifierUserParamsDto {
  @IsNumber()
  id: number;
}
