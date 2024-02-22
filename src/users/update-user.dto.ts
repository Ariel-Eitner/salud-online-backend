// update-user.dto.ts
import { IsNumber, IsOptional } from 'class-validator';
import { UserInformation } from 'src/user_information/user_information.entity';
import { UserType } from 'src/user_type/user_type.entity';

export class UpdateUserDto {
  @IsNumber()
  @IsOptional()
  user_type?: UserType;

  @IsNumber()
  @IsOptional()
  user_info?: UserInformation;
}
