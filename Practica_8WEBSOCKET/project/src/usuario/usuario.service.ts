import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "./entities/usuario.entity";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";

@Injectable()
export class UsuariosService{
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ){}
    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>{
        const usuario = this.usuarioRepository.create(createUsuarioDto);
        return this.usuarioRepository.save(usuario);
    }
    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }
    findOne(id: any): Promise<Usuario>{
        return this.usuarioRepository.findOne(id);
    }
    async remove(id: string): Promise<void>{
        await this.usuarioRepository.update(id, { active: false });
    }
    async findByName(nombre: string): Promise<Usuario> {
        return this.usuarioRepository.findOne({ where: { nombre } });
    }
}