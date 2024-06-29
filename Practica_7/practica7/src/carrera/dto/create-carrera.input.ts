import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Estado } from '../../estado.enum';

@InputType()
export class CreateCarreraDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  nombreCarrera: string;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  kilometros: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  detalles: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  fecha: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  hora: string;

  @Field(() => Estado)
  @IsEnum(Estado)
  estado: Estado;
}
