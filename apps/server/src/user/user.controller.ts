import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from '@server/common/decorator/public.decorator';

@Controller({
  version: '1',
  path: 'users',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('/create')
  async create(@Body() payload: CreateUserDto) {
    return await this.userService.create(payload);
  }
}
