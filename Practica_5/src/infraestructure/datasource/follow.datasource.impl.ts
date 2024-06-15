import { CreateFollowDto, UpdateFollowDto, FollowModel, Follow, FollowDatasource } from "../../domain";

export class FollowDatasourceImpl implements FollowDatasource {
    async create(dto: CreateFollowDto): Promise<Follow> {
        const follow = await FollowModel.create(dto);
        return follow;
    }

    async getAll(): Promise<Follow[]> {
        const follows = await FollowModel.find();
        return follows;
    }

    async getById(id: string): Promise<Follow | null> {
        const follow = await FollowModel.findById(id);
        return follow; // Puede ser Follow | null
    }

    async update(dto: UpdateFollowDto): Promise<Follow | null> {
        const { id, ...updateData } = dto;
        const follow = await FollowModel.findByIdAndUpdate(id, updateData, { new: true });
        return follow;
    }

    async deleteById(id: string): Promise<Follow | null> {
        const follow = await FollowModel.findByIdAndDelete(id);
        return follow;
    }
}
