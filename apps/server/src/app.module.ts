import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'nestjs-prisma';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { validationRules } from './common/config/env.validator';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './common/jwt/jwt.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: validationRules,
    }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '9h' },
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
