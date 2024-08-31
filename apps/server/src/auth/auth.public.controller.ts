import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller({
  version: '1',
  path: '/public/auths',
})
export class AuthPublicController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() payload: LoginDto) {
    const token = await this.authService.login(
      payload.emailOrPhoneNumber,
      payload.password,
    );

    if (!token) throw new UnauthorizedException();

    return {
      token,
    };
  }
}
