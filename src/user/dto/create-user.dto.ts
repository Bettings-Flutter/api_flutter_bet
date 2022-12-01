import { IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  idfirebase: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  coin: number;
}
