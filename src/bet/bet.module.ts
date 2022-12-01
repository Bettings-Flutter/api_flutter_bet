import { Module } from '@nestjs/common';
import { BetService } from './bet.service';
import { BetController } from './bet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bet, betSchema } from './schema/bet.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bet.name, schema: betSchema }])],
  providers: [BetService],
  controllers: [BetController],
})
export class BetModule {}
