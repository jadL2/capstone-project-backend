import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type SoilAnalysisDocument = SoilAnalysis & Document;

@Schema({ timestamps: true })
export class SoilAnalysis {
  @Prop({ required: true })
  farmName: string;

  @Prop({ required: true })
  location: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  sampleDate: Date;

  @Prop()
  pH: number;

  @Prop()
  nitrogenLevel: number;

  @Prop()
  phosphorusLevel: number;

  @Prop()
  potassiumLevel: number;

  @Prop()
  organicMatter: number;

  @Prop()
  moisture: number;

  @Prop()
  texture: string;

  @Prop()
  recommendations: string;

  @Prop()
  notes: string;
}

export const SoilAnalysisSchema = SchemaFactory.createForClass(SoilAnalysis);