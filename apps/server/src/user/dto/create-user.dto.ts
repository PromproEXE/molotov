import { Trim } from '@server/common/decorator/trim.decorator';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  username: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  name: string;
}
