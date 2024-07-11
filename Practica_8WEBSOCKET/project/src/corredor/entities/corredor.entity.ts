import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';



@ObjectType()
@Entity()
export class Corredor {
  @Field(() => ID)
  @ObjectIdColumn()
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


}


