import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  
}
