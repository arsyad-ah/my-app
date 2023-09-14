import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.debug(process.env.SCRAPER_PORT);
  await app.listen(process.env.SCRAPER_PORT);
}
bootstrap();
