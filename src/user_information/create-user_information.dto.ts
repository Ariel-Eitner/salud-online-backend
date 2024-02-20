import { IsNumber, IsString, IsDate, IsOptional } from 'class-validator';

export class CreateUserInformationDto {
  @IsOptional()
  @IsNumber()
  user_id?: number;

  @IsString()
  dni: string;

  @IsString()
  phone: string;

  @IsDate()
  birth_date: Date;

  @IsNumber()
  gender_id: number;
}

export class UpdateUserInformationDto {
  @IsOptional()
  @IsString()
  dni?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsDate()
  birth_date?: Date;

  @IsOptional()
  @IsNumber()
  gender_id?: number;
}
