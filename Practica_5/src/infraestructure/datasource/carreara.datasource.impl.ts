import { CreateCarreraDto,Carrera, CarreraModel,UpdateCarreraDto, CarreraDatasource } from "../../domain";

export class CarreraDatasourceImpl implements CarreraDatasource {
    async create(dto: CreateCarreraDto): Promise<Carrera> {
        const carrera = await CarreraModel.create(dto);
        return carrera;
    }


    async update(dto: UpdateCarreraDto): Promise<Carrera | null> {
        const { id, ...updateData } = dto;
        const carrera = await CarreraModel.findByIdAndUpdate(id, updateData, { new: true });
        return carrera;
    }

    async deleteById(id: string): Promise<Carrera | null> {
        const carrera = await CarreraModel.findByIdAndDelete(id);
        return carrera;
    }
}
