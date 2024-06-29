import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { ObjectType, Field, ID,  registerEnumType } from '@nestjs/graphql';
import { Estado } from '../../estado.enum';


@ObjectType()
@Entity()
export class Carrera {
  @Field(() => ID)
  @ObjectIdColumn()
  id: string;

  @Field()
  @Column()
  nombreCarrera: string;

  @Field()
  @Column()
  kilometros: number;

  @Field()
  @Column()
  detalles: string;

  @Field()
  @Column()
  fecha: string;

  @Field()
  @Column()
  hora: string;

  @Field(() => Estado)
  @Column({
    type: 'enum',
    enum: Estado,
    default: Estado.Activo,
  })
  estado: Estado;
}
