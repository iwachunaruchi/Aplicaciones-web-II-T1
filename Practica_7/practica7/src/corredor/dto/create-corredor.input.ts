import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Estado } from '../../estado.enum';

@InputType()
export class CreateCorredorDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  peso: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  altura: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  edad: number;

  @Field(() => Estado)
  @IsEnum(Estado)
  estado: Estado;
}
