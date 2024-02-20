import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientDetails } from './patient_details.entity'; // Asegúrate de importar tu entidad
import {
  CreatePatientDetailsDto,
  UpdatePatientDetailsDto,
} from './create-patient_details.dto';

@Injectable()
export class PatientDetailsService {
  constructor(
    @InjectRepository(PatientDetails)
    private patientDetailsRepository: Repository<PatientDetails>,
  ) {}

  // Create
  async create(
    patientDetailsData: CreatePatientDetailsDto,
  ): Promise<PatientDetails> {
    const newPatientDetails =
      this.patientDetailsRepository.create(patientDetailsData);
    return this.patientDetailsRepository.save(newPatientDetails);
  }

  // Read (all)
  async findAll(): Promise<PatientDetails[]> {
    return this.patientDetailsRepository.find();
  }

  // Read (one)
  async findOne(id: number): Promise<PatientDetails> {
    const patientDetails = await this.patientDetailsRepository.findOne({
      where: { id },
    });
    if (!patientDetails) {
      throw new NotFoundException(`PatientDetails with ID ${id} not found`);
    }
    return patientDetails;
  }

  // Update
  async update(
    id: number,
    updateData: UpdatePatientDetailsDto,
  ): Promise<PatientDetails> {
    const patientDetails = await this.findOne(id);
    Object.assign(patientDetails, updateData);
    return this.patientDetailsRepository.save(patientDetails);
  }

  // Delete
  async remove(id: number): Promise<void> {
    const patientDetails = await this.findOne(id);
    await this.patientDetailsRepository.remove(patientDetails);
  }
}
