import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CropDocument = Crop & Document;

@Schema({ timestamps: true })
export class Crop {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  growingSeason: string;

  @Prop()
  waterRequirements: string;

  @Prop()
  soilType: string;

  @Prop()
  temperatureRange: string;

  @Prop()
  growthDuration: number;

  @Prop()
  moroccanRegionSuitability: [string];

  @Prop()
  imageUrl: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const CropSchema = SchemaFactory.createForClass(Crop);