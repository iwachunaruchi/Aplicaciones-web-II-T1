import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Follow } from './entities/follow.entity';
import { CreateFollowDto } from './dto/create-follow.input';

@Injectable()
export class FollowService {
  constructor(
    @InjectRepository(Follow)
    private readonly followRepository: Repository<Follow>,
  ) {}

  create(createFollowDto: CreateFollowDto): Promise<Follow> {
    const follow = this.followRepository.create(createFollowDto);
    return this.followRepository.save(follow);
  }

  findAll(): Promise<Follow[]> {
    return this.followRepository.find();
  }

  findOne(id: string): Promise<Follow> {
    return this.followRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.followRepository.delete(id);
  }
}
