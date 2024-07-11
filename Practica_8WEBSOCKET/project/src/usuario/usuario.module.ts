import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuariosGateway } from "./usuario.gateway";
import { UsuariosService } from "./usuario.service";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuariosGateway, UsuariosService],
    exports: [UsuariosService]
})
export class UsuarioModule {}