import { Module } from '@nestjs/common';
import { UserInformationService } from './user_information.service';
import { UserInformationController } from './user_information.controller';
import { UserInformation } from './user_information.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserInformation])],
  providers: [UserInformationService],
  controllers: [UserInformationController],
  exports: [TypeOrmModule.forFeature([UserInformation])],
})
export class UserInformationModule {}
