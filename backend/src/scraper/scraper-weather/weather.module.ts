import { Module } from '@nestjs/common';
import { ScraperWeatherService } from './weather.service';
import { ScraperWeatherController } from './weather.controller';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  providers: [ScraperWeatherService],
  controllers: [ScraperWeatherController],
  imports: [ScheduleModule.forRoot()],
})
export class ScraperWeatherModule {}
