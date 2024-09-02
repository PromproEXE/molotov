import {
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    Post,
} from '@nestjs/common';
import { User } from '@server/common/decorator/user.decorator';
import { UserSession } from '@server/common/interface/UserSession';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';

@Controller({
    version: '1',
    path: 'channels',
})
export class ChannelController {
    constructor(private readonly channelService: ChannelService) {}

    @Get('/')
    async getAllChannel(@User() user: UserSession) {
        const channels = await this.channelService.getAll(user.id);

        return channels;
    }

    @Get('/:id')
    async getChannelById(@Param('id') id: string, @User() user: UserSession) {
        const channels = await this.channelService.getById(id, user.id);

        if (!channels) throw new NotFoundException('CHANNEL NOT FOUND');

        return channels;
    }

    @Post('/')
    async create(@Body() data: CreateChannelDto, @User() user: UserSession) {
        const channel = await this.channelService.create({
            ...data,
            createdById: user.id,
        });

        return channel;
    }
}
