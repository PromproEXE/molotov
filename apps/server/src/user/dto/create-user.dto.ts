import { Trim } from '@server/common/decorator/trim.decorator';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  username: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @Trim()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  name: string;
}
