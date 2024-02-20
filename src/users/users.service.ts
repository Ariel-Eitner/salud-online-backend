import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { UserType } from 'src/user_type/user_type.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({
      relations: [
        'user_type',
        'user_info',
        'user_info.gender',
        'user_info.doctorDetails',
        'user_info.patientDetails',
      ], // Esto cargará la información de UserType
    });
  }

  // Crear un nuevo usuario
  async create(createUserDto: CreateUserDto): Promise<User> {
    const userType = await this.userTypeRepository.findOneBy({
      id: createUserDto.user_type,
    });
    if (!userType) {
      throw new NotFoundException(
        `UserType with ID ${createUserDto.user_type} not found.`,
      );
    }

    const newUser = this.usersRepository.create({
      ...createUserDto,
      user_type: userType,
    });

    await this.usersRepository.save(newUser);
    return newUser;
  }

  // Obtener un usuario por su ID
  async findOne(id: number): Promise<User | null> {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: [
        'user_type',
        'user_info',
        'user_info.gender',
        'user_info.doctorDetails',
        'user_info.patientDetails',
      ], // Esto cargará la información de UserType
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return user;
  }

  // Actualizar un usuario
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.usersRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  // Eliminar un usuario
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
