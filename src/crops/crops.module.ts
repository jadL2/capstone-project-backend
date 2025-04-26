import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CropsController } from './crops.controller';
import { CropsService } from './crops.service';
import { Crop, CropSchema } from './schemas/crop.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Crop.name, schema: CropSchema }]),
  ],
  controllers: [CropsController],
  providers: [CropsService],
  exports: [CropsService],
})
export class CropsModule {}