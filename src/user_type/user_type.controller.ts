import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserTypeService } from './user_type.service';
import { UserType } from './user_type.entity';

@Controller('user_types')
export class UserTypeController {
  constructor(private readonly userTypeService: UserTypeService) {}

  // Obtener todos los tipos de usuario
  @Get()
  async findAll(): Promise<UserType[]> {
    return this.userTypeService.findAll();
  }

  // Obtener un tipo de usuario por ID
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserType> {
    return this.userTypeService.findOne(id);
  }
}
