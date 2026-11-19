import { Test, TestingModule } from '@nestjs/testing';
import { AbairService } from './abair.service.js';

describe('AbairService', () => {
  let service: AbairService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbairService],
    }).compile();

    service = module.get<AbairService>(AbairService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
