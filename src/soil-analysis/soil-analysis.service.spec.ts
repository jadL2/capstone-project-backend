import { Test, TestingModule } from '@nestjs/testing';
import { SoilAnalysisService } from './soil-analysis.service';

describe('SoilAnalysisService', () => {
  let service: SoilAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoilAnalysisService],
    }).compile();

    service = module.get<SoilAnalysisService>(SoilAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
