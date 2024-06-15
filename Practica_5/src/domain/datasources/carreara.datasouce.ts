import { CreateCarreraDto, UpdateCarreraDto } from "../dtos";
import { Carrera } from "../entities/carrera.entity";

export abstract class CarreraDatasource {
    abstract create(dto: CreateCarreraDto): Promise<Carrera>;
    abstract update(dto: UpdateCarreraDto): Promise<Carrera | null>;
    abstract deleteById(id: string): Promise<Carrera | null>;
}
