import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ChannelRepository {
    constructor(private readonly prisma: PrismaService) {}

    private Channel = this.prisma.channel;

    getAll(opt: Prisma.ChannelFindManyArgs = {}) {
        return this.Channel.findMany(opt);
    }

    getById(id: string, opt: Omit<Prisma.ChannelFindUniqueArgs, 'where'> = {}) {
        return this.Channel.findUnique({ ...opt, where: { id } });
    }

    create(
        data: Prisma.ChannelCreateManyInput,
        opt: Omit<Prisma.ChannelCreateArgs, 'data'> = {},
    ) {
        return this.Channel.create({ ...opt, data });
    }

    update(
        id: string,
        data: Prisma.ChannelUncheckedUpdateManyInput,
        opt: Omit<Prisma.ChannelUpdateArgs, 'where' | 'data'>,
    ) {
        return this.Channel.update({ ...opt, where: { id }, data });
    }

    delete(id: string, opt: Omit<Prisma.ChannelDeleteArgs, 'where'> = {}) {
        return this.Channel.delete({ ...opt, where: { id } });
    }
}
