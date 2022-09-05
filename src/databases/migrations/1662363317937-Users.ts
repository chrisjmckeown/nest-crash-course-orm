import { MigrationInterface, QueryRunner } from "typeorm";

export class Users1662363317937 implements MigrationInterface {
    name = 'Users1662363317937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" text NOT NULL, "lastName" text NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
