import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './jwt.constants';
import { JwtTokenPayload } from './jwt.interface';
import { UserRepository } from '@server/user/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepo: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(tokenPayload: JwtTokenPayload) {
    const { userId } = tokenPayload;
    const user = await this.userRepo.getById(userId);
    return user;
  }
}
