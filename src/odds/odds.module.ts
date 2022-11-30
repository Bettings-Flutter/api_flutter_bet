import { Module } from '@nestjs/common';
import { OddsService } from './odds.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OddsController } from './odds.controller';
import { Odds, oddsSchema } from './schema/odds.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Odds.name, schema: oddsSchema }]),
  ],
  providers: [OddsService],
  controllers: [OddsController],
})
export class OddsModule {}
