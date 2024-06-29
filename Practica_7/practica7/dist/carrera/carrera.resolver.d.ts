import { CarreraService } from './carrera.service';
import { Carrera } from './entities/carrera.entity';
import { CreateCarreraDto } from './dto/create-carrera.input';
export declare class CarreraResolver {
    private readonly carreraService;
    constructor(carreraService: CarreraService);
    createCarrera(createCarreraDto: CreateCarreraDto): Promise<Carrera>;
    findAll(): Promise<Carrera[]>;
    findOne(id: string): Promise<Carrera>;
    removeCarrera(id: string): Promise<void>;
}
