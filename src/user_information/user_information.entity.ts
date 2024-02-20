// user-information.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/user.entity';
import { Gender } from 'src/gender/gender.entity';
import { DoctorDetails } from 'src/doctor_details/doctor_details.entity';
import { PatientDetails } from 'src/patient_details/patient_details.entity';

@Entity('user_information')
export class UserInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ length: 20 })
  dni: string;

  @Column({ length: 20 })
  phone: string;

  @Column()
  birth_date: Date;

  @ManyToOne(() => Gender)
  @JoinColumn({ name: 'gender_id' })
  gender: Gender;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => DoctorDetails, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctorDetails: DoctorDetails;

  @ManyToOne(() => PatientDetails, { nullable: true })
  @JoinColumn({ name: 'patient_id' })
  patientDetails: PatientDetails;
}
