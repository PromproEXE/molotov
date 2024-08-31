import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller({
  version: '1',
  path: 'users',
})
export class UserPublicController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Body() payload: CreateUserDto) {
    return await this.userService.create(payload);
  }
}
