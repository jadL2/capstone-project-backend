import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Crop, CropDocument } from './schemas/crop.schema';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-crop.dto';

@Injectable()
export class CropsService {
  constructor(
    @InjectModel(Crop.name) private cropModel: Model<CropDocument>,
  ) {}

  async create(createCropDto: CreateCropDto): Promise<Crop> {
    const newCrop = new this.cropModel(createCropDto);
    return newCrop.save();
  }

  async findAll(query: any = {}): Promise<Crop[]> {
    return this.cropModel.find(query).exec();
  }

  async findOne(id: string): Promise<Crop | null> {
    return this.cropModel.findById(id).exec();
  }

  async update(id: string, updateCropDto: UpdateCropDto): Promise<Crop | null> {
    return this.cropModel.findByIdAndUpdate(id, updateCropDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Crop | null> {
    return this.cropModel.findByIdAndDelete(id).exec();
  }

  async testConnection(): Promise<{ status: string; timestamp: Date }> {
    try {
      await this.cropModel.findOne().exec();
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