import { PrismaClient } from "@prisma/client";
import { CreateFollowDto, UpdateFollowDto } from "../../domain";
import { Follow } from "../../domain";
import { FollowDatasource } from "../../domain";

const prisma = new PrismaClient();

export class FollowDatasourcePrismaImpl implements FollowDatasource{
    async create(dto: CreateFollowDto): Promise<Follow> {
        const follow = await prisma.follow.create({
            data: dto,
        });
        return follow as Follow; // Asegúrate de que el tipo coincida con Follow
    }

    async getAll(): Promise<Follow[]> {
        const follows = await prisma.follow.findMany();
        return follows as Follow[]; // Asegúrate de que el tipo coincida con Follow[]
    }

    async getById(id: string): Promise<Follow | null> {
        const follow = await prisma.follow.findUnique({
            where: {
                id: parseInt(id), // Ajusta según la estructura de tu modelo en Prisma
            },
        });
        return follow as Follow | null; // Asegúrate de que el tipo coincida con Follow | null
    }

    async update(dto: UpdateFollowDto): Promise<Follow | null> {
        const { id, ...updateData } = dto;
        const follow = await prisma.follow.findByIdAndUpdate(id, updateData, { new: true });
        return follow;
    }

    async deleteById(id: string): Promise<Follow | null> {
        const deletedFollow = await prisma.follow.delete({
            where: { id: parseInt(id) },
        });
        return deletedFollow as Follow | null; // Asegúrate de que el tipo coincida con Follow | null
    }
}