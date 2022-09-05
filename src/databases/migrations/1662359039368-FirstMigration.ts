import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1662359039368 implements MigrationInterface {
    name = 'FirstMigration1662359039368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "new_table" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "academic_new_table" text, "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_729b6fb6aeb7253bb3d57f89f05" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "new_table"`);
    }

}
