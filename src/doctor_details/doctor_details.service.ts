import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorDetails } from './doctor_details.entity';
import { CreateDoctorDetailDto } from './create-doctor_details.dto';

@Injectable()
export class DoctorDetailsService {
  constructor(
    @InjectRepository(DoctorDetails)
    private doctorDetailsRepository: Repository<DoctorDetails>,
  ) {}

  // Crear un nuevo doctor
  async create(
    createDoctorDetailDto: CreateDoctorDetailDto,
  ): Promise<DoctorDetails> {
    const doctorDetail = this.doctorDetailsRepository.create(
      createDoctorDetailDto,
    );
    return await this.doctorDetailsRepository.save(doctorDetail);
  }

  // Encontrar todos los doctores
  async findAll(): Promise<DoctorDetails[]> {
    return await this.doctorDetailsRepository.find();
  }

  // Encontrar un doctor por ID
  async findOne(id: number): Promise<DoctorDetails> {
    const doctorDetail = await this.doctorDetailsRepository.findOne({
      where: { id },
    });
    if (!doctorDetail) {
      throw new NotFoundException(`DoctorDetails with ID "${id}" not found`);
    }
    return doctorDetail;
  }

  // Actualizar un doctor
  async update(id: number, updateDoctorDetailDto: any): Promise<DoctorDetails> {
    const doctorDetail = await this.findOne(id);
    Object.assign(doctorDetail, updateDoctorDetailDto);
    return await this.doctorDetailsRepository.save(doctorDetail);
  }

  // Eliminar un doctor
  async remove(id: number): Promise<void> {
    const doctorDetail = await this.findOne(id);
    await this.doctorDetailsRepository.remove(doctorDetail);
  }
}
