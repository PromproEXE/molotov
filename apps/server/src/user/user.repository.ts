import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import * as argon2 from 'argon2';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  private User = this.prisma.user;

  async getAll(opt: Prisma.UserFindManyArgs = {}) {
    return this.User.findMany({ ...opt });
  }

  async getById(
    id: string,
    opt: Omit<Prisma.UserFindUniqueArgs, 'where'> = {},
  ) {
    return this.User.findUnique({ ...opt, where: { id } });
  }

  async create(
    data: Prisma.UserCreateManyInput,
    opt: Omit<Prisma.UserCreateArgs, 'data'> = {},
  ) {
    const { password, ...other } = data;
    const payload: Prisma.UserCreateInput = {
      ...other,
      password: await argon2.hash(password),
    };

    return this.User.create({ ...opt, data: payload });
  }

  async update(
    id: string,
    data: Prisma.UserUpdateManyMutationInput,
    opt: Omit<Prisma.UserUpdateArgs, 'where' | 'dat'>,
  ) {
    return this.User.update({ ...opt, where: { id }, data });
  }
}
