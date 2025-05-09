import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CropsService } from './crops.service';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-crop.dto';

@Controller('crops')
export class CropsController {
  constructor(private readonly cropsService: CropsService) {}

  @Post()
  create(@Body() createCropDto: CreateCropDto) {
    return this.cropsService.create(createCropDto);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.cropsService.findAll(query);
  }

  @Get('test-connection')
  testConnection() {
    return this.cropsService.testConnection();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cropsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCropDto: UpdateCropDto) {
    return this.cropsService.update(id, updateCropDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cropsService.remove(id);
  }
}