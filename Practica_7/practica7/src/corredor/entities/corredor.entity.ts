import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';

import { Estado } from '../../estado.enum';



@ObjectType()
@Entity()
export class Corredor {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  nombre: string;

  @Field()
  @Column()
  peso: number;

  @Field()
  @Column()
  altura: number;

  @Field()
  @Column()
  edad: number;

  @Field(() => Estado)
  @Column({
    type: 'enum',
    enum: Estado,
    default: Estado.Activo,
  })
  estado: Estado;
}
