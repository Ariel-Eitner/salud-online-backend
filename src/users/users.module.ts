import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserType } from 'src/user_type/user_type.entity';
import { UserInformation } from 'src/user_information/user_information.entity';
import { Gender } from 'src/gender/gender.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserType, UserInformation, Gender]),
  ],
  providers: [UsersService],
  controllers: [UsersController],

  exports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
