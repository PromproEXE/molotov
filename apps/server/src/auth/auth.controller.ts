import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from '@server/common/decorator/public.decorator';

@Controller({
  version: '1',
  path: '/auth',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/login')
  async login(@Body() payload: LoginDto) {
    const authResponse = await this.authService.login(
      payload.username,
      payload.password,
    );

    if (!authResponse) throw new UnauthorizedException();

    return authResponse;
  }
}
