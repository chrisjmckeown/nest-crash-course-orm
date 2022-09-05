import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import dataSource from './databases/dataSource';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const PORT = parseInt(configService.get('SERVER_PORT'));

  await dataSource.initialize();

  app.useGlobalPipes(
    new ValidationPipe({
      validationError: {
        target: true,
        value: true,
      },
    }),
  );

  app.use(cookieParser());

  console.log(`Service is running on ${PORT}`);

  await app.listen(PORT);
}
bootstrap();
