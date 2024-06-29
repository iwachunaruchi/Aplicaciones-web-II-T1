import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from './entities/carrera.entity';
import { CarreraService } from './carrera.service';
import { CarreraResolver } from './carrera.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Carrera])],
  providers: [CarreraService, CarreraResolver]
})
export class CarreraModule {}