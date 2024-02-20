import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { PatientDetailsService } from './patient_details.service';
import {
  CreatePatientDetailsDto,
  UpdatePatientDetailsDto,
} from './create-patient_details.dto';

@Controller('patient-details')
export class PatientDetailsController {
  constructor(private readonly patientDetailsService: PatientDetailsService) {}

  @Post()
  async create(@Body() createPatientDetailsDto: CreatePatientDetailsDto) {
    return this.patientDetailsService.create(createPatientDetailsDto);
  }

  @Get()
  async findAll() {
    return this.patientDetailsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.patientDetailsService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePatientDetailsDto: UpdatePatientDetailsDto,
  ) {
    return this.patientDetailsService.update(+id, updatePatientDetailsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.patientDetailsService.remove(+id);
  }
}
