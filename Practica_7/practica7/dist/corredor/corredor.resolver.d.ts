import { CorredorService } from './corredor.service';
import { Corredor } from './entities/corredor.entity';
import { CreateCorredorDto } from './dto/create-corredor.input';
export declare class CorredorResolver {
    private readonly corredorService;
    constructor(corredorService: CorredorService);
    createCorredor(createCorredorDto: CreateCorredorDto): Promise<Corredor>;
    findAll(): Promise<Corredor[]>;
    findOne(id: string): Promise<Corredor>;
    removeCorredor(id: string): Promise<void>;
}
