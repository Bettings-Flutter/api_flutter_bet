import { Controller, Post, Param, Body } from '@nestjs/common';
import { BetService } from './bet.service';
import { CreateBetDto } from './dto/create-bet.dto';
import { Bet } from './schema/bet.schema';

@Controller('bet')
export class BetController {
  constructor(private readonly betService: BetService) {}

  @Post(':id')
  async create(
    @Param('id') fixtureId: string,
    @Body() createBetDto: CreateBetDto,
  ): Promise<Bet> {
    return this.betService.create(fixtureId, createBetDto);
  }
}
