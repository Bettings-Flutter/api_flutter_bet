import { Controller, Post, Get } from '@nestjs/common';
import { OddsService } from './odds.service';
import { Odds } from './schema/odds.schema';

@Controller('odds')
export class OddsController {
  constructor(private readonly oddsService: OddsService) {}

  @Post()
  async StoreOdss() {
    return await this.oddsService.storeOdds();
  }

  @Get()
  findAll(): Promise<Odds[]> {
    return this.oddsService.findAll();
  }
}
