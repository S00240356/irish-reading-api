import { Module } from '@nestjs/common';
import { SentencesService } from './sentences.service.js';
import { SentencesController } from './sentences.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sentence } from './entities/sentence.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Sentence])],
  controllers: [SentencesController],
  providers: [SentencesService],
})
export class SentencesModule {}
