import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { ObjectType, Field, ID,  registerEnumType } from '@nestjs/graphql';
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


}
