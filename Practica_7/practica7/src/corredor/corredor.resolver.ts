import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CorredorService } from './corredor.service';
import { Corredor } from './entities/corredor.entity';
import { CreateCorredorDto } from './dto/create-corredor.input';

@Resolver(() => Corredor)
export class CorredorResolver {
  constructor(private readonly corredorService: CorredorService) {}

  @Query(() => [Corredor])
  async corredores() {
    return this.corredorService.findAll();
  }

  @Mutation(() => Corredor)
  async createCorredor(@Args('createCorredorInput') createCorredorInput: CreateCorredorDto) {
    return this.corredorService.create(createCorredorInput);
  }
}
