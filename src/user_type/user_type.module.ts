import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserType } from './user_type.entity';
import { UserTypeService } from './user_type.service';
import { UserTypeController } from './user_type.controller';
import { User } from 'src/users/user.entity';
import { UserInformation } from 'src/user_information/user_information.entity';
import { Gender } from 'src/gender/gender.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserType, User, UserInformation, Gender]),
  ],
  providers: [UserTypeService],
  controllers: [UserTypeController],

  exports: [TypeOrmModule.forFeature([UserType])],
})
export class UserTypeModule {}
