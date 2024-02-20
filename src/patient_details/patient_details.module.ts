import { Module } from '@nestjs/common';
import { PatientDetailsController } from './patient_details.controller';
import { PatientDetailsService } from './patient_details.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientDetails } from './patient_details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PatientDetails])],
  controllers: [PatientDetailsController],
  providers: [PatientDetailsService],
  exports: [TypeOrmModule.forFeature([PatientDetails])],
})
export class PatientDetailsModule {}
