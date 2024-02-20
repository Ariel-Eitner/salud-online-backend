import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gender } from './gender.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenderService {
  constructor(
    @InjectRepository(Gender)
    private genderRepository: Repository<Gender>,
  ) {}

  // Método para obtener todos los géneros
  async findAll(): Promise<Gender[]> {
    return this.genderRepository.find();
  }

  // Método para obtener un género específico por ID
  async findOne(id: number): Promise<Gender | null> {
    return this.genderRepository.findOneBy({ id });
  }
}
