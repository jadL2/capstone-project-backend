import { PartialType } from '@nestjs/swagger';
import { CreateSoilAnalysisDto } from './create-soil-analysis.dto';


export class UpdateSoilAnalysisDto extends PartialType(CreateSoilAnalysisDto) {}