export class CreateSoilAnalysisDto {
    farmName: string;
    location: string;
    userId: string;
    sampleDate: Date;
    pH?: number;
    nitrogenLevel?: number;
    phosphorusLevel?: number;
    potassiumLevel?: number;
    organicMatter?: number;
    moisture?: number;
    texture?: string;
    recommendations?: string;
    notes?: string;
  }