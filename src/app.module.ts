import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OddsModule } from './odds/odds.module';
import { BetModule } from './bet/bet.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.uqsxd66.mongodb.net/?retryWrites=true&w=majority`,
    ),
    UserModule,
    OddsModule,
    BetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
