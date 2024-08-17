import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TRPCModule } from './trpc/trpc.module';

@Module({
  imports: [TRPCModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
