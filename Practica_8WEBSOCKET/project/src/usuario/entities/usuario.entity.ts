// src/usuarios/usuario.entity.ts
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Usuario {
  @ObjectIdColumn()
  id: string;

  @Column()
  nombre: string;

  @Column()
  active: boolean;

  @Column()
  contraseña: string;
}
