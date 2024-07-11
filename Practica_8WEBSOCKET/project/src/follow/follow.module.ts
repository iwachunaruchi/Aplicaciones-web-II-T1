// src/follow/follow.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FollowService } from './follow.service';
import { Follow } from './entities/follow.entity';
import { FollowGateway } from './follow.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Follow])],
  providers: [FollowService, FollowGateway],
  exports: [FollowService],
})
export class FollowModule {}
