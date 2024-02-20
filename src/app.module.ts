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

@Module({
  imports: [
    dbModule,
    UserModule,
    UserTypeModule,
    UserInformationModule,
    GenderModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(morgan('dev')) // 'dev' es un formato predefinido de logging
      .forRoutes({ path: '*', method: RequestMethod.ALL }); // Aplica morgan a todas las rutas y métodos
  }
}
