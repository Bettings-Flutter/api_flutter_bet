import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

class Coin {
  coin: number;
}

@Schema()
export class User {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  coin: number;
}

export const userSchema = SchemaFactory.createForClass(User);
