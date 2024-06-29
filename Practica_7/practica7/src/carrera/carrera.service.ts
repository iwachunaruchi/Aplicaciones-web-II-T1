import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from './entities/carrera.entity';
import { CreateCarreraDto } from './dto/create-carrera.input';
import {Estado } from '../estado.enum'
import { ObjectId } from 'mongodb';

@Injectable()
export class CarreraService {
  constructor(
    @InjectRepository(Carrera)
    private readonly carreraRepository: Repository<Carrera>,
  ) {}

  async create(createCarreraDto: CreateCarreraDto): Promise<Carrera> {
    const carrera = this.carreraRepository.create(createCarreraDto);
    carrera.estado = Estado.Activo;
    return this.carreraRepository.save(carrera);
  }

  async findAll(): Promise<Carrera[]> {
    return this.carreraRepository.find({ where: { estado: Estado.Activo } });
  }

  async findOne(id: any): Promise<Carrera> {
    console.log(`Looking for Carrera with id: ${id}`); // Añade un log para depuración
    const carrera = await this.carreraRepository.findOne(id);
    if (!carrera) {
      console.log(`Carrera with id ${id} not found`);
      return null;
    }
    console.log(`Found Carrera: `, carrera); // Añade un log para depuración
    return carrera;
  }



  async remove(id: string): Promise<Carrera> {
    const carrera = await this.findOne(id);
    console.log(carrera)
    carrera.estado = Estado.Eliminado;
    console.log(carrera)
    await this.carreraRepository.save(carrera);
    return carrera;

  }
}
