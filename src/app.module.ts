import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import * as path from 'path';

const {
  ZHOSKIY_MYSQL_HOST,
  ZHOSKIY_MYSQL_DATABASE,
  ZHOSKIY_MYSQL_USER,
  ZHOSKIY_MYSQL_PASSWORD,
  ZHOSKA_MIGRIROVAT_DB,
} = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: ZHOSKIY_MYSQL_HOST,
      username: ZHOSKIY_MYSQL_USER,
      password: ZHOSKIY_MYSQL_PASSWORD,
      database: ZHOSKIY_MYSQL_DATABASE,
      migrations: [path.resolve(process.cwd(), 'dist/migrations/*.js')],
      migrationsRun: ZHOSKA_MIGRIROVAT_DB === 'true',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    ApiModule,
  ],
})
export class AppModule {}
