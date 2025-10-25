import { Test, TestingModule } from '@nestjs/testing';
import { CakesController } from './cakes.controller';
import { CakesService } from './cakes.service';

describe('CakesController', () => {
  let controller: CakesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CakesController],
      providers: [CakesService],
    }).compile();

    controller = module.get<CakesController>(CakesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
