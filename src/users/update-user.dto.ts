import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly first_name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly last_name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly email?: string;

  // @IsOptional()
  // @IsInt()
  // readonly user_type?: number;
}
