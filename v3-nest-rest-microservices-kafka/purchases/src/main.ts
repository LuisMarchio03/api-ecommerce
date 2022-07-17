import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Users - Students
// Products - Curses
// Purchase - Mercado Pago

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
