import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreatePatientDetailsDto {
  @IsInt()
  user_id: number;

  @IsString()
  medical_history: string;

  @IsString()
  allergies: string;

  @IsString()
  current_medication: string;
}

export class UpdatePatientDetailsDto {
  @IsOptional()
  @IsInt()
  user_id?: number;

  @IsOptional()
  @IsString()
  medical_history?: string;

  @IsOptional()
  @IsString()
  allergies?: string;

  @IsOptional()
  @IsString()
  current_medication?: string;
}
