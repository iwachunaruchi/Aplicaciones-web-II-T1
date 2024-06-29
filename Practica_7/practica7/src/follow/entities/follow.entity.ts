import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Corredor } from '../../corredor/entities/corredor.entity';
import { Carrera } from '../../carrera/entities/carrera.entity';
import { Estado } from '../../estado.enum';


@ObjectType()
@Entity()
export class Follow {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => Corredor)
  @ManyToOne(() => Corredor)
  corredor: Corredor;

  @Field(() => Carrera)
  @ManyToOne(() => Carrera)
  carrera: Carrera;

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

  @Field(() => Estado)
  @Column({
    type: 'enum',
    enum: Estado,
    default: Estado.Activo,
  })
  estado: Estado;
}
