import { CreateCorredorDto, UpdateCorredorDto } from "../dtos";
import { Corredor } from "../entities/corredor.entity";

export abstract class CorredorDatasource {
    abstract createCorredor(corredor: CreateCorredorDto): Promise<Corredor>;
    abstract getCorredorById(id: string): Promise<Corredor | null>;
    abstract getCorredores(): Promise<Corredor[]>;
    abstract updateCorredor(dto: UpdateCorredorDto): Promise<Corredor | null>;
    abstract deleteCorredor(id: string): Promise<Corredor | null>;
}