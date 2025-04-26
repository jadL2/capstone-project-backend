import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SoilAnalysis, SoilAnalysisDocument } from './schemas/soil-analysis.schema';
import { CreateSoilAnalysisDto } from './dto/create-soil-analysis.dto';
import { UpdateSoilAnalysisDto } from './dto/update-soil-analysis.dto';

@Injectable()
export class SoilAnalysisService {
  constructor(
    @InjectModel(SoilAnalysis.name) private soilAnalysisModel: Model<SoilAnalysisDocument>,
  ) {}

  async create(createSoilAnalysisDto: CreateSoilAnalysisDto): Promise<SoilAnalysis> {
    const newSoilAnalysis = new this.soilAnalysisModel(createSoilAnalysisDto);
    return newSoilAnalysis.save();
  }

  async findAll(query: any = {}): Promise<SoilAnalysis[]> {
    return this.soilAnalysisModel.find(query).exec();
  }

  async findOne(id: string): Promise<SoilAnalysis | null> {
    return this.soilAnalysisModel.findById(id).exec();
  }

  async update(id: string, updateSoilAnalysisDto: UpdateSoilAnalysisDto): Promise<SoilAnalysis | null> {
    return this.soilAnalysisModel.findByIdAndUpdate(id, updateSoilAnalysisDto, { new: true }).exec();
  }

  async remove(id: string): Promise<SoilAnalysis | null> {
    return this.soilAnalysisModel.findByIdAndDelete(id).exec();
  }

  async testConnection(): Promise<{ status: string; timestamp: Date }> {
    try {
      await this.soilAnalysisModel.findOne().exec();
      return { 
        status: 'Database connection successful!', 
        timestamp: new Date() 
      };
    } catch (error) {
      return { 
        status: `Database connection failed: ${error.message}`, 
        timestamp: new Date() 
      };
    }
  }
}