import { Module } from '@nestjs/common';
import { AbairService } from './abair.service.js';
import { AbairController } from './abair.controller.js';

@Module({
  controllers: [AbairController],
  providers: [AbairService],
})
export class AbairModule {}
