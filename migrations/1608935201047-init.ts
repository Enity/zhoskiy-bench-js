import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1608935201047 implements MigrationInterface {
  name = 'init1608935201047';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `bear` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `kdRatio` varchar(255) NOT NULL, `loveToSuckCocks` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `bear`');
  }
}
