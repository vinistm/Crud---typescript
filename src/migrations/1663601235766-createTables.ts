import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1663601235766 implements MigrationInterface {
    name = 'createTables1663601235766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_info" ("id" uuid NOT NULL, "telephone" integer, "email" character varying(251) NOT NULL, "password" character varying(250) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying(250) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_info" DROP CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_info"`);
    }

}
