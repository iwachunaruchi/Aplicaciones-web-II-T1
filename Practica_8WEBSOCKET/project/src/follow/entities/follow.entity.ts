// src/follow/follow.entity.ts
import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Follow {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

  @Field()
  @Column()
  corredorId: string;

  @Field()
  @Column()
  carreraId: string;

  @Field()
  @Column()
  tiempoLlegada: number;

  @Field()
  @Column()
  ordenLlegada: number;

  @Field()
  @Column()
  pulsoInicial: number;

  @Field()
  @Column()
  pulsoFinal: number;

  @Field()
  @Column()
  estado: string;
}
