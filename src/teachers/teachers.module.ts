import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service.js';
import { TeachersController } from './teachers.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
