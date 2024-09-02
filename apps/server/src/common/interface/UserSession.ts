import { Prisma } from '@prisma/client';

export interface UserSession extends Prisma.UserGetPayload<true> {}
