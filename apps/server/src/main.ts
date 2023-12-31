// import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, no-console
  console.log(`Application is running on: ${await app.getUrl()}`);
}

void bootstrap();
