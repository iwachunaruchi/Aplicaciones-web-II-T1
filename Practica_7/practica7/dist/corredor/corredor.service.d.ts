import { Repository } from 'typeorm';
import { Corredor } from './entities/corredor.entity';
import { CreateCorredorDto } from './dto/create-corredor.input';
export declare class CorredorService {
    private readonly corredorRepository;
    constructor(corredorRepository: Repository<Corredor>);
    create(createCorredorDto: CreateCorredorDto): Promise<Corredor>;
    findAll(): Promise<Corredor[]>;
    findOne(id: string): Promise<Corredor>;
    remove(id: string): Promise<void>;
}
