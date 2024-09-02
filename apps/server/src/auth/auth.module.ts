import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '@server/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '@server/common/jwt/jwt.constants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '@server/common/jwt/jwt.strategy';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: jwtConstants,
            signOptions: { expiresIn: '9h' },
        }),
        UserModule,
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
