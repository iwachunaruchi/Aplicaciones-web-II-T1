import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Corredor } from './entities/corredor.entity';
import { CreateCorredorDto } from './dto/create-corredor.input';

@Injectable()
export class CorredorService {
  constructor(
    @InjectRepository(Corredor)
    private readonly corredorRepository: Repository<Corredor>,
  ) {}

  create(createCorredorDto: CreateCorredorDto): Promise<Corredor> {
    const corredor = this.corredorRepository.create(createCorredorDto);
    return this.corredorRepository.save(corredor);
  }

  findAll(): Promise<Corredor[]> {
    return this.corredorRepository.find();
  }

  findOne(id: string): Promise<Corredor> {
    return this.corredorRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.corredorRepository.delete(id);
  }
}
