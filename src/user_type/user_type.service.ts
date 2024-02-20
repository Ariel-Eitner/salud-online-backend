import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from './user_type.entity';

@Injectable()
export class UserTypeService {
  constructor(
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
  ) {}

  // Obtener todos los tipos de usuario
  async findAll(): Promise<UserType[]> {
    return this.userTypeRepository.find();
  }

  // Obtener un tipo de usuario por ID
  async findOne(id: number): Promise<UserType> {
    const userType = await this.userTypeRepository.findOneBy({ id });
    if (!userType) {
      throw new NotFoundException(`UserType with ID ${id} not found.`);
    }
    return userType;
  }
}
