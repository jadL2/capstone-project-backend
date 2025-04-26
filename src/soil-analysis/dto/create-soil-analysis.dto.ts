import { IsNotEmpty, IsString, IsDate, IsOptional, IsNumber, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';

export class CreateSoilAnalysisDto {
  @IsNotEmpty()
  @IsString()
  farmName: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsMongoId()
  userId: Types.ObjectId;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  sampleDate: Date;

  @IsOptional()
  @IsNumber()
  pH?: number;

  @IsOptional()
  @IsNumber()
  nitrogenLevel?: number;

  @IsOptional()
  @IsNumber()
  phosphorusLevel?: number;

  @IsOptional()
  @IsNumber()
  potassiumLevel?: number;

  @IsOptional()
  @IsNumber()
  organicMatter?: number;

  @IsOptional()
  @IsNumber()
  moisture?: number;

  @IsOptional()
  @IsString()
  texture?: string;

  @IsOptional()
  @IsString()
  recommendations?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}