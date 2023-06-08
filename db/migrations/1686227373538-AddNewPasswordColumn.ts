import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewPasswordColumn1686227373538 implements MigrationInterface {
    name = 'AddNewPasswordColumn1686227373538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
    }

}
