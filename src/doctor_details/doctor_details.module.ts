import { Module } from '@nestjs/common';
import { DoctorDetailsController } from './doctor_details.controller';
import { DoctorDetailsService } from './doctor_details.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorDetails } from './doctor_details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorDetails])],
  controllers: [DoctorDetailsController],
  providers: [DoctorDetailsService],
  exports: [TypeOrmModule.forFeature([DoctorDetails])],
})
export class DoctorDetailsModule {}
