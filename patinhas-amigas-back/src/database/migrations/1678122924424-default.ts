import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678122924424 implements MigrationInterface {
    name = 'default1678122924424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pets" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pets"`);
    }

}
