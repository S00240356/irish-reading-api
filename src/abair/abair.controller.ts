import {Body, Controller, Post } from '@nestjs/common';
import { AbairService } from './abair.service.js';

@Controller('abair')
export class AbairController {
  constructor(private readonly abairService: AbairService) {}

@Post('speak')
speak(@Body() body: {text: string}) {
  return this.abairService.synthesizeSpeech(body.text);
}
}