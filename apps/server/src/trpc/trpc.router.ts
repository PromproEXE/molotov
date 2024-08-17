import { INestApplication, Injectable } from '@nestjs/common';
import { TRPCService } from './trpc.service';
import z from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TRPCRouter {
  constructor(private readonly trpc: TRPCService) {}

  appRouter = this.trpc.router({
    hello: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(() => 'Hello World'),
  });

  async applyMiddleWare(app: INestApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TRPCRouter['appRouter'];
