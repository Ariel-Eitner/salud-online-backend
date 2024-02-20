import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DoctorDetailsService } from './doctor_details.service';
import {
  CreateDoctorDetailDto,
  UpdateDoctorDetailDto,
} from './create-doctor_details.dto';

@Controller('doctor-details')
export class DoctorDetailsController {
  constructor(private readonly doctorDetailsService: DoctorDetailsService) {}

  @Post()
  async create(@Body() createDoctorDetailDto: CreateDoctorDetailDto) {
    return this.doctorDetailsService.create(createDoctorDetailDto);
  }

  @Get()
  async findAll() {
    return this.doctorDetailsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.doctorDetailsService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDoctorDetailDto: UpdateDoctorDetailDto,
  ) {
    return this.doctorDetailsService.update(+id, updateDoctorDetailDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.doctorDetailsService.remove(+id);
  }
}
