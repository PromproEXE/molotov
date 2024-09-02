import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { JwtTokenPayload } from '@server/common/jwt/jwt.interface';
import { UserRepository } from '@server/user/user.repository';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(
    usernameOrEmail: string,
    password: string,
  ): Promise<{ token: string; user: Prisma.UserGetPayload<true> } | null> {
    const user = await this.userRepo.getByEmailOrPhoneNumber(
      usernameOrEmail,
      usernameOrEmail,
    );

    if (!user) return null;

    const isMatchPassword = await argon2.verify(user.password, password);

    if (isMatchPassword) {
      const tokenPayload: JwtTokenPayload = {
        userId: user.id,
        email: user.email,
      };
      const token = this.jwtService.sign(tokenPayload);
      return { token, user };
    }

    return null;
  }
}
