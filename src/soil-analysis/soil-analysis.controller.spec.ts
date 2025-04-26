import { Test, TestingModule } from '@nestjs/testing';
import { SoilAnalysisController } from './soil-analysis.controller';

describe('SoilAnalysisController', () => {
  let controller: SoilAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoilAnalysisController],
    }).compile();

    controller = module.get<SoilAnalysisController>(SoilAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
