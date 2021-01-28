import { IsISO8601, IsNumber, IsString } from 'class-validator';

export class BodyDto {
  @IsNumber()
  number: number;

  @IsString()
  string: string;

  @IsISO8601()
  date: Date;
}
