import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FollowService } from './follow.service';
import { Follow } from './entities/follow.entity';
import { CreateFollowDto } from './dto/create-follow.input';

@Resolver(() => Follow)
export class FollowResolver {
  constructor(private readonly followService: FollowService) {}

  @Query(() => [Follow])
  async follows() {
    return this.followService.findAll();
  }

  @Mutation(() => Follow)
  async createFollow(@Args('createFollowInput') createFollowInput: CreateFollowDto) {
    return this.followService.create(createFollowInput);
  }
}

