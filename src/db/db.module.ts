import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig)],
  providers: [],
  exports: [TypeOrmModule],
})
export class dbModule {}
