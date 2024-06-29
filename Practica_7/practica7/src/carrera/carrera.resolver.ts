import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CarreraService } from './carrera.service';
import { Carrera } from './entities/carrera.entity';
import { CreateCarreraDto } from './dto/create-carrera.input';


@Resolver(() => Carrera)
export class CarreraResolver {
  constructor(private readonly carreraService: CarreraService) {}

  @Mutation(() => Carrera)
  createCarrera(@Args('createCarreraDto') createCarreraDto: CreateCarreraDto) {
    return this.carreraService.create(createCarreraDto);
  }

  @Query(() => [Carrera], { name: 'carreras' })
  findAll() {
    return this.carreraService.findAll();
  }

  @Query(() => Carrera, { name: 'carrera' })
  async findOne(@Args('id') id: string): Promise<Carrera> {
    console.log(`Received request to find Carrera with id: ${id}`); // Añade un log para depuración
    const carrera = await this.carreraService.findOne(id);
    if (!carrera) {
      console.log(`Carrera with id ${id} not found`);
      return null;
    }
    return carrera;
  }



  @Mutation(() => Carrera)
  removeCarrera(@Args('id') id: string) {
    console.log('entre al delete logico')
    return this.carreraService.remove(id);
  }
}