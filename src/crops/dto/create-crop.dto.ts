import { IsNotEmpty, IsString, IsOptional, IsNumber, IsArray, IsBoolean } from 'class-validator';

export class CreateCropDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  growingSeason: string;

  @IsOptional()
  @IsString()
  waterRequirements?: string;

  @IsOptional()
  @IsString()
  soilType?: string;

  @IsOptional()
  @IsString()
  temperatureRange?: string;

  @IsOptional()
  @IsNumber()
  growthDuration?: number;

  @IsOptional()
  @IsArray()
  moroccanRegionSuitability?: string[];

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}