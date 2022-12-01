import { IsString, IsInt } from 'class-validator';

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
