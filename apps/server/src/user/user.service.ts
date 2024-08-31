import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async create(
    data: Prisma.UserCreateManyInput,
    opt: Omit<Prisma.UserCreateArgs, 'data'>,
  ) {
    return this.userRepo.create(data, opt);
  }
}
