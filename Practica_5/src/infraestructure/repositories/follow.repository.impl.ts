import { CreateFollowDto, UpdateFollowDto, FollowModel, Follow, FollowRepository, FollowDatasource } from "../../domain";

export class FollowRepositoryImpl implements FollowRepository{

    constructor(
        private readonly datasource: FollowDatasource
    ){}
    async create(dto: CreateFollowDto): Promise<Follow> {
        const follow = await FollowModel.create(dto);
        return follow;
    }

    async getAll(): Promise<Follow[]> {
        return await FollowModel.find();
    }

    async getById(id: string): Promise<Follow | null> {
        return await FollowModel.findById(id);
    }

    async update(dto: UpdateFollowDto): Promise<Follow | null> {
        const { id, ...updateData } = dto;
        const follow = await FollowModel.findByIdAndUpdate(id, updateData, { new: true });
        return follow;
    }

    async deleteById(id: string): Promise<Follow | null> {
        return await FollowModel.findByIdAndDelete(id);
    }
}