import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.NEST_PORT ?? 3000, () =>
    console.log(`Server running on port ${process.env.NEST_PORT}`),
  );
}
bootstrap().catch(({ message }) => console.log('error', message));
