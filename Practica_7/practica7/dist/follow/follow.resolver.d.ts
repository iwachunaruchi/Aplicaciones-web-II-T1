import { FollowService } from './follow.service';
import { Follow } from './entities/follow.entity';
import { CreateFollowDto } from './dto/create-follow.input';
export declare class FollowResolver {
    private readonly followService;
    constructor(followService: FollowService);
    createFollow(createFollowDto: CreateFollowDto): Promise<Follow>;
    findAll(): Promise<Follow[]>;
    findOne(id: string): Promise<Follow>;
    removeFollow(id: string): Promise<void>;
}
