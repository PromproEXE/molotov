import { Injectable } from '@nestjs/common';
import { ChannelRepository } from './channel.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class ChannelService {
    constructor(private readonly ChannelRepo: ChannelRepository) {}

    getAll(userId: string) {
        return this.ChannelRepo.getAll({
            where: {
                members: {
                    every: {
                        userId,
                    },
                },
            },
        });
    }

    getById(id: string, userId: string) {
        return this.ChannelRepo.getAll({
            where: {
                AND: [
                    {
                        id,
                    },
                    {
                        members: {
                            every: {
                                userId,
                            },
                        },
                    },
                ],
            },
        });
    }

    create(
        data: Prisma.ChannelCreateManyInput,
        opt: Omit<Prisma.ChannelCreateArgs, 'data'> = {},
    ) {
        return this.ChannelRepo.create(data, opt);
    }

    update(
        id: string,
        data: Prisma.ChannelUncheckedUpdateManyInput,
        opt: Omit<Prisma.ChannelUpdateArgs, 'where' | 'data'>,
    ) {
        return this.ChannelRepo.update(id, data, opt);
    }

    delete(id: string, opt: Omit<Prisma.ChannelDeleteArgs, 'where'> = {}) {
        return this.ChannelRepo.delete(id, opt);
    }
}
