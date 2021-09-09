import { ConnectionOptions } from 'typeorm';

const {
  ZHOSKIY_MYSQL_HOST,
  ZHOSKIY_MYSQL_DATABASE,
  ZHOSKIY_MYSQL_USER,
  ZHOSKIY_MYSQL_PASSWORD,
  ZHOSKA_MIGRIROVAT_DB,
  ZHOSKA_NAPOLNIT_DB,
} = process.env;

const config: ConnectionOptions = {
  type: 'mariadb',
  host: ZHOSKIY_MYSQL_HOST,
  username: ZHOSKIY_MYSQL_USER,
  password: ZHOSKIY_MYSQL_PASSWORD,
  database: ZHOSKIY_MYSQL_DATABASE,
  cli: {
    migrationsDir: 'migrations',
  },
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  entities: [__dirname + '/../src/**/*.entity{.ts,.js}'],
};

export = config;
