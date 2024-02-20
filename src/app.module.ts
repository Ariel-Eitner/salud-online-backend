import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import * as morgan from 'morgan';

import { dbModule } from './db/db.module';

import { UserModule } from './users/users.module';
import { UserTypeModule } from './user_type/user_type.module';

import { UserInformationModule } from './user_information/user_information.module';
import { GenderModule } from './gender/gender.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorDetailsModule } from './doctor_details/doctor_details.module';
import { PatientDetailsModule } from './patient_details/patient_details.module';

@Module({
  imports: [
    dbModule,
    UserModule,
    UserTypeModule,
    UserInformationModule,
    GenderModule,
    DoctorDetailsModule,
    PatientDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(morgan('dev')) // 'dev' es un formato predefinido de logging
      .forRoutes({ path: '*', method: RequestMethod.ALL }); // Aplica morgan a todas las rutas y métodos
  }
}
