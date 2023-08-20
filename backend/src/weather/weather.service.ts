import { Injectable, Logger } from '@nestjs/common';
import { WeatherDto } from 'src/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WeatherService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly logger = new Logger(WeatherService.name);

  async getData(area: string) {
    const data: WeatherDto = await this.prisma.weather.findFirst({
      where: {
        area: area,
      },
    });
    const transformedData = this.transformWeather(data);
    return { data: transformedData };
  }

  private transformWeather(data) {
    return {
      area: data.area,
      forecast: data.forecast,
      timestamp: data.timestamp,
    };
  }
}