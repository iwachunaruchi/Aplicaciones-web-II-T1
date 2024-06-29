import { Repository } from 'typeorm';
import { Carrera } from './entities/carrera.entity';
import { CreateCarreraDto } from './dto/create-carrera.input';
export declare class CarreraService {
    private readonly carreraRepository;
    constructor(carreraRepository: Repository<Carrera>);
    create(createCarreraDto: CreateCarreraDto): Promise<Carrera>;
    findAll(): Promise<Carrera[]>;
    findOne(id: string): Promise<Carrera>;
    remove(id: string): Promise<void>;
}
