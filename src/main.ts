import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { getManager } from 'typeorm';
import { Bear } from './api/bear.entity';
import { ValidationPipe } from '@nestjs/common';

const { ZHOSKA_NAPOLNIT_DB, USE_FASTIFY = 'false' } = process.env;

async function bootstrap() {
  const app =
    USE_FASTIFY === 'true'
      ? await NestFactory.create(AppModule, new FastifyAdapter())
      : await NestFactory.create(AppModule);

  if (ZHOSKA_NAPOLNIT_DB === 'true') {
    const entityManager = getManager();
    console.log('Начинаю жоска наполнять бд');
    await Promise.all(
      Array.from({ length: 5000 }).map(() => {
        return entityManager.save(new Bear('Sanya', '10/0', true));
      }),
    );
    console.log('Наполнил');
  }

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
