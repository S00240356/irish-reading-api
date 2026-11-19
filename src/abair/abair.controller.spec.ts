import { Test, TestingModule } from '@nestjs/testing';
import { AbairController } from './abair.controller.js';
import { AbairService } from './abair.service.js';

describe('AbairController', () => {
  let controller: AbairController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbairController],
      providers: [AbairService],
    }).compile();

    controller = module.get<AbairController>(AbairController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
