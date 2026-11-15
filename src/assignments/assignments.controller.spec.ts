import { Test, TestingModule } from '@nestjs/testing';
import { AssignmentsController } from './assignments.controller.js';
import { AssignmentsService } from './assignments.service.js';

describe('AssignmentsController', () => {
  let controller: AssignmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignmentsController],
      providers: [AssignmentsService],
    }).compile();

    controller = module.get<AssignmentsController>(AssignmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
