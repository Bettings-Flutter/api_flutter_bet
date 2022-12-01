import { IsString, IsNumber, ValidateIf } from 'class-validator';

export class CreateBetDto {
  @IsString()
  uuid: string;

  @IsString()
  home: string;

  @IsString()
  away: string;

  @IsNumber()
  odd: number;

  @IsNumber()
  fixtureId: number;

  @IsString()
  @ValidateIf((value) => value !== null)
  result: string | null;

  @IsNumber()
  coins: number;
}
