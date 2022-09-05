import { MigrationInterface, QueryRunner } from "typeorm";

export class LasName1662359547782 implements MigrationInterface {
    name = 'LasName1662359547782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "new_table" ADD "lastName" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "new_table" DROP COLUMN "lastName"`);
    }

}
