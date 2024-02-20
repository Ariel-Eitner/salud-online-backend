import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  url: process.env.JAWSDB_URL,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false, // En producción, esto debería ser false
  extra: {
    // Configuraciones específicas para manejar la reconexión
    connectionLimit: 100, // Establece un límite de conexiones en el pool
    connectTimeout: 30000, // 30 segundos antes de un timeout de conexión
    acquireTimeout: 30000, // 30 segundos antes de un timeout al adquirir una conexión del pool
    waitForConnections: true, // Espera por conexiones disponibles en vez de lanzar un error
    queueLimit: 0, // Máximo número de solicitudes de conexión en cola (0 para sin límite)
  },
};

export default dbConfig;
