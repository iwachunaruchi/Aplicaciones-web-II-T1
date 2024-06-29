import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corredor } from './entities/corredor.entity';
import { CorredorService } from './corredor.service';
import { CorredorResolver } from './corredor.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Corredor])],
  providers: [CorredorService, CorredorResolver],
})
export class CorredorModule {}