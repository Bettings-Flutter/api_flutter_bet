import { IsString, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CoinDto {
  @IsInt()
  coin: number;
}

export class UpdateUserDto {
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

  @IsInt()
  coin: number;
}
