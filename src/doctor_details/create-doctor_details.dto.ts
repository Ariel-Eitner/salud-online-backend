import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateDoctorDetailDto {
  @IsNumber()
  user_id: number;

  @IsString()
  license_number: string;

  @IsString()
  specialization: string;

  @IsString()
  description: string;
}

export class UpdateDoctorDetailDto {
  @IsOptional()
  @IsNumber()
  user_id?: number;

  @IsOptional()
  @IsString()
  license_number?: string;

  @IsOptional()
  @IsString()
  specialization?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
