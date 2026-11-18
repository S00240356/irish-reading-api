import { Injectable } from '@nestjs/common';
import { CreateSentenceDto } from './dto/create-sentence.dto.js';
import { UpdateSentenceDto } from './dto/update-sentence.dto.js';
import { Repository } from 'typeorm';
import { Sentence } from './entities/sentence.entity.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SentencesService {
  constructor(
    @InjectRepository(Sentence)
    private readonly sentencesRepository: Repository<Sentence>
  ) {}

  create(createSentenceDto: CreateSentenceDto) {
    const sentence = this.sentencesRepository.create(createSentenceDto);
    return this.sentencesRepository.save(sentence);
  }

  findAll() {
    return this.sentencesRepository.find();;
  }

  findOne(id: number) {
    return `This action returns a #${id} sentence`;
  }

  update(id: number, updateSentenceDto: UpdateSentenceDto) {
    return `This action updates a #${id} sentence`;
  }

  remove(id: number) {
    return `This action removes a #${id} sentence`;
  }
}
