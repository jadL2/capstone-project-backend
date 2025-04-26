import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SoilAnalysisService } from './soil-analysis.service';
import { CreateSoilAnalysisDto } from './dto/create-soil-analysis.dto';
import { UpdateSoilAnalysisDto } from './dto/update-soil-analysis.dto';

@Controller('soil-analysis')
export class SoilAnalysisController {
  constructor(private readonly soilAnalysisService: SoilAnalysisService) {}

  @Post()
  create(@Body() createSoilAnalysisDto: CreateSoilAnalysisDto) {
    return this.soilAnalysisService.create(createSoilAnalysisDto);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.soilAnalysisService.findAll(query);
  }

  @Get('test-connection')
  testConnection() {
    return this.soilAnalysisService.testConnection();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soilAnalysisService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoilAnalysisDto: UpdateSoilAnalysisDto) {
    return this.soilAnalysisService.update(id, updateSoilAnalysisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soilAnalysisService.remove(id);
  }
}
