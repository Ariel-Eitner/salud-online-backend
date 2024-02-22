import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { UserType } from 'src/user_type/user_type.entity';
import { UserInformation } from 'src/user_information/user_information.entity';
import { Gender } from 'src/gender/gender.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
    @InjectRepository(UserInformation)
    private userInformationRepository: Repository<UserInformation>,
    @InjectRepository(Gender)
    private genderRepository: Repository<Gender>,
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
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
      relations: [
        'user_type',
        'user_info',
        'user_info.gender',
        'user_info.doctorDetails',
        'user_info.patientDetails',
      ],
    });

    if (existingUser) {
      console.log(existingUser, 37);
      return existingUser;
    }
    //  const userType = await this.userTypeRepository.findOneBy({
    //    id: createUserDto.user_type,
    //  });
    //  if (!userType) {
    //    throw new NotFoundException(
    //      `UserType with ID ${createUserDto.user_type} not found.`,
    //    );
    //  }

    const newUser = this.usersRepository.create({
      first_name: createUserDto.given_name,
      last_name: createUserDto.family_name,
      email: createUserDto.email,
      user_type: undefined,
      // user_info: Aquí deberías manejar la información del usuario, si es necesario
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
  // async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
  //   console.log(id);
  //   console.log(updateUserDto);
  //   await this.usersRepository.update(id, updateUserDto);
  //   return this.findOne(id);
  // }

  async patchUser(
    id: number,
    updateUserDto: Partial<UpdateUserDto>,
  ): Promise<User> {
    console.log(id);
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: [
        'user_type',
        'user_info',
        'user_info.gender',
        'user_info.doctorDetails',
        'user_info.patientDetails',
      ],
    });
    console.log(user);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }

    // Actualizar solo los campos proporcionados en updateUserDto
    if (updateUserDto.user_type !== undefined) {
      const userType = await this.userTypeRepository.findOne({
        where: { id: updateUserDto.user_type.id },
      });
      if (!userType) {
        throw new NotFoundException(
          `UserType with ID ${updateUserDto.user_type} not found.`,
        );
      }
      user.user_type = userType;
    }

    if (updateUserDto.user_info !== undefined) {
      const userInfo = await this.userInformationRepository.findOne({
        where: { id: updateUserDto.user_info.id },
      });
      if (!userInfo) {
        throw new NotFoundException(
          `Info with ID ${updateUserDto.user_info.id} not found`,
        );
      }
      user.user_info = userInfo;
    }

    if (updateUserDto.user_info?.gender !== undefined) {
      const gender = await this.genderRepository.findOne({
        where: { id: updateUserDto.user_info.gender.id },
      });

      if (!gender) {
        throw new NotFoundException(
          `Gender with ID ${updateUserDto.user_info.gender.id} not found.`,
        );
      }

      user.user_info.gender = gender;
    }

    await this.usersRepository.save(user);
    console.log(user, 125);

    return user;
  }

  // Eliminar un usuario
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
