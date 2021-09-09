import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { Bear } from './bear.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bear])],
  controllers: [ApiController],
})
export class ApiModule {}
