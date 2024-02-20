import { Controller, Get, Param } from '@nestjs/common';
import { GenderService } from './gender.service';

@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  // Ruta para obtener todos los géneros
  @Get()
  async findAll() {
    return this.genderService.findAll();
  }

  // Ruta para obtener un género específico por ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.genderService.findOne(id);
  }
}
