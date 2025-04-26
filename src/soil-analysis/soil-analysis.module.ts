import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SoilAnalysisController } from './soil-analysis.controller';
import { SoilAnalysisService } from './soil-analysis.service';
import { SoilAnalysis, SoilAnalysisSchema } from './schemas/soil-analysis.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SoilAnalysis.name, schema: SoilAnalysisSchema }]),
  ],
  controllers: [SoilAnalysisController],
  providers: [SoilAnalysisService],
  exports: [SoilAnalysisService],
})
export class SoilAnalysisModule {}