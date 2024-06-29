import { Repository } from 'typeorm';
import { Follow } from './entities/follow.entity';
import { CreateFollowDto } from './dto/create-follow.input';
export declare class FollowService {
    private readonly followRepository;
    constructor(followRepository: Repository<Follow>);
    create(createFollowDto: CreateFollowDto): Promise<Follow>;
    findAll(): Promise<Follow[]>;
    findOne(id: string): Promise<Follow>;
    remove(id: string): Promise<void>;
}
