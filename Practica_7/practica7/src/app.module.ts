import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule,registerEnumType } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { Estado } from './estado.enum';
import { CorredorModule } from './corredor/corredor.module';
import { CarreraModule } from './carrera/carrera.module';
import { FollowModule } from './follow/follow.module';


@Module({
  imports:[
  ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DATABASE_URL,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins:[ApolloServerPluginLandingPageLocalDefault()],
    }),
    CorredorModule,
    CarreraModule,
    FollowModule,
  ],
})
export class AppModule {
  constructor() {
    registerEnumType(Estado, {
      name: 'Estado', // Nombre que se usará en GraphQL
    });
  }
}