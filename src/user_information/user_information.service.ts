import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInformation } from './user_information.entity';
import {
  CreateUserInformationDto,
  UpdateUserInformationDto,
} from './create-user_information.dto';

@Injectable()
export class UserInformationService {
  constructor(
    @InjectRepository(UserInformation)
    private userInformationRepository: Repository<UserInformation>,
  ) {}

  // Crear información de usuario
  async create(
    userInformationData: CreateUserInformationDto,
  ): Promise<UserInformation> {
    const newUserInformation =
      this.userInformationRepository.create(userInformationData);
    await this.userInformationRepository.save(newUserInformation);
    return newUserInformation;
  }

  // Encontrar todos los registros
  async findAll(): Promise<UserInformation[]> {
    return this.userInformationRepository.find({
      relations: ['user', 'gender'],
    });
  }

  // Encontrar por ID
  async findOne(id: number): Promise<UserInformation> {
    const userInformation = await this.userInformationRepository.findOne({
      where: { id },
      relations: ['user', 'gender'],
    });

    if (!userInformation) {
      throw new NotFoundException(`UserInformation with ID ${id} not found.`);
    }

    return userInformation;
  }

  // Actualizar información de usuario
  async update(
    id: number,
    updateData: UpdateUserInformationDto,
  ): Promise<UserInformation> {
    const userInformation = await this.findOne(id); // Asegúrate de que exista
    this.userInformationRepository.merge(userInformation, updateData);
    return this.userInformationRepository.save(userInformation);
  }

  // Eliminar información de usuario
  async delete(id: number): Promise<void> {
    await this.findOne(id); // Asegúrate de que exista
    await this.userInformationRepository.delete(id);
  }
}
