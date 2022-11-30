import { Controller, Post } from '@nestjs/common';
import { OddsService } from './odds.service';

@Controller('odds')
export class OddsController {
  constructor(private readonly oddsService: OddsService) {}

  @Post()
  async StoreOdss() {
    return await this.oddsService.storeOdds();
  }
}
