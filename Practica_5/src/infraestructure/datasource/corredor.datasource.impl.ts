import { CreateCorredorDto,UpdateCorredorDto,Corredor,CorredorModel,CorredorDatasource } from "../../domain";

export class CorredorDatasourceImpl implements CorredorDatasource {
    async createCorredor(dto: CreateCorredorDto): Promise<Corredor> {
        const corredor = await CorredorModel.create(dto);
        return corredor;
    }

    async getCorredorById(id: string): Promise<Corredor | null> {
        const corredor = await CorredorModel.findById(id);
        return corredor;
    }

    async getCorredores(): Promise<Corredor[]> {
        const corredores = await CorredorModel.find();
        return corredores;
    }

    async updateCorredor(dto: UpdateCorredorDto): Promise<Corredor | null> {
        const { id, ...updateData } = dto;
        const corredor = await CorredorModel.findByIdAndUpdate(id, updateData, { new: true });
        return corredor;
    }

    async deleteCorredor(id: string): Promise<Corredor | null> {
        const corredor = await CorredorModel.findByIdAndDelete(id);
        return corredor;
    }
}