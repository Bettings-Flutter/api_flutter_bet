import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/schema/user.schema';

export type BetDocument = Bet & Document;

@Schema()
export class Bet {
  @Prop()
  uuid: string;

  @Prop()
  home: string;

  @Prop()
  away: string;

  @Prop()
  odd: number;

  @Prop()
  fixtureId: number;

  @Prop()
  coins: number;

  @Prop()
  result: string | null;
}

export const betSchema = SchemaFactory.createForClass(Bet);
