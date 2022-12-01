import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBetDto } from './dto/create-bet.dto';
import { Bet, BetDocument } from './schema/bet.schema';

@Injectable()
export class BetService {
  constructor(@InjectModel(Bet.name) private betModel: Model<BetDocument>) {}

  async create(fixtureId: string, createBetDto: CreateBetDto) {
    return await new this.betModel({ fixtureId, ...createBetDto }).save();
  }
}
