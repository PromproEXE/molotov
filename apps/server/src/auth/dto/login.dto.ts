import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  emailOrPhoneNumber: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
