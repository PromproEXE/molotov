import { Trim } from '@server/common/decorator/trim.decorator';
import { IsNotEmpty, IsString } from 'class-validator';
import { Nullable } from 'class-validator-extended';

export class CreateChannelDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Nullable()
  @Trim()
  channelProfileImg: string | null;
}
