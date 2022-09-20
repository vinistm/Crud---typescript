import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1663622559982 implements MigrationInterface {
    name = 'createTables1663622559982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "userInfo" ("id" SERIAL NOT NULL, "telephone" integer, "email" character varying(251) NOT NULL, "userId" uuid, CONSTRAINT "PK_2a191c92ffee9d860da37038ae1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying(250) NOT NULL, "password" character varying(250) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "userInfo" ADD CONSTRAINT "FK_e8f6ca40d3fde5123760117b37d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "userInfo" DROP CONSTRAINT "FK_e8f6ca40d3fde5123760117b37d"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "userInfo"`);
    }

}
