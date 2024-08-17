import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TRPCRouter } from './trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // TRPC
  const trpc = app.get(TRPCRouter);
  trpc.applyMiddleWare(app);

  await app.listen(3333);
}
bootstrap();
