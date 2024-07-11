import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// import { CarreraModule } from './carrera/carrera.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FollowModule } from './follow/follow.module';
@Module({
  imports:[
  ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/WSS',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UsuarioModule,
    FollowModule
  ],
})
export class AppModule {}