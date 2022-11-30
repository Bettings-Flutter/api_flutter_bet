import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type OddsDocument = Odds & Document;

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string | null;
  season: number;
}

export interface Bookmakers {
  id: number;
  name: string;
  bets: [
    {
      id: number;
      name: string;
      values: [
        {
          value: string;
          odd: string;
        },
      ];
    },
  ];
}

export interface Fixture {
  id: number;
  timezone: string;
  date: string;
  timestamp: number;
}

export interface Matches {
  fixture: Fixture;
  bookmakers: Bookmakers;
  league: League;
}

@Schema()
export class Odds {
  @Prop({ type: Object })
  matches: Matches;
}

export const oddsSchema = SchemaFactory.createForClass(Odds);
