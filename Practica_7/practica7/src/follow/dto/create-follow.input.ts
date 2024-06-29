import { InputType, Field, ID } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Estado } from '../../estado.enum';

@InputType()
export class CreateFollowDto {
  @Field(() => ID)
  @IsNotEmpty()
  corredorId: number;

  @Field(() => ID)
  @IsNotEmpty()
  carreraId: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  tiempoLlegada: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  ordenLlegada: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  pulsoInicial: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  pulsoFinal: number;

  @Field(() => Estado)
  @IsEnum(Estado)
  estado: Estado;
}
