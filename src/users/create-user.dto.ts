import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsInt,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  given_name: string;

  @IsNotEmpty()
  @IsString()
  family_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsInt()
  @IsOptional()
  user_type: number;

  @IsInt()
  @IsOptional()
  user_info: number;
}
