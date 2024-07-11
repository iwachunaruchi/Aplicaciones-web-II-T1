// src/usuarios/dto/create-usuario.dto.ts
import { IsString, IsBoolean } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsBoolean()
  active: boolean;

  @IsString()
  contraseña: string;
}
