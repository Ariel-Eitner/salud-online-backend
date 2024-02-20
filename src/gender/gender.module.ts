import { Module } from '@nestjs/common';

import { Gender } from './gender.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderService } from './gender.service';
import { GenderController } from './gender.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Gender])],
  providers: [GenderService],
  controllers: [GenderController],
  exports: [TypeOrmModule.forFeature([Gender])],
})
export class GenderModule {}
