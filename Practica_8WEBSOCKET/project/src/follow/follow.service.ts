import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Follow } from './entities/follow.entity';
import { CreateFollowDto } from './dto/create-follow.input';

@Injectable()
export class FollowService{
    constructor(
        @InjectRepository(Follow)
        private followRepository: Repository<Follow>,
      ) {}
    
      create(createFollowDto: CreateFollowDto): Promise<Follow> {
        console.log(createFollowDto)
        const follow = this.followRepository.create(createFollowDto);
        console.log(follow)
        return this.followRepository.save(follow);
      }
    
      findAll(): Promise<Follow[]> {
        return this.followRepository.find();
      }
    
      findOne(id: any): Promise<Follow> {
        return this.followRepository.findOne({ where: { id } });
      }
    
      async remove(id: string): Promise<void> {
        await this.followRepository.update(id, { estado: 'inactivo' });
      }
}