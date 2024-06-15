import { CreateFollowDto, UpdateFollowDto } from "../dtos";
import { Follow, FollowModel } from '../entities/follow.entity';

export abstract class FollowRepository {
    abstract create(dto: CreateFollowDto): Promise<Follow>;
    abstract getAll(): Promise<Follow[]>;
    abstract getById(id: string): Promise<Follow | null>; // Cambio aquí
    abstract update(dto: UpdateFollowDto): Promise<Follow | null>;
    abstract deleteById(id: string): Promise<Follow | null>;
}