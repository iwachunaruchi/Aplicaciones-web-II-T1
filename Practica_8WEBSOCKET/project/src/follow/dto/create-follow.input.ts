// src/follow/dto/create-follow.dto.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateFollowDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  corredorId: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  carreraId: string;

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

  @Field()
  @IsString()
  @IsNotEmpty()
  estado: string;
}
