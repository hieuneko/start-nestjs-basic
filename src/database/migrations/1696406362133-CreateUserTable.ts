import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUserTable1696406362133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user"
            (
                "id"   uuid DEFAULT uuid_generate_v4(),
                "name" character varying(500),
                "age"  integer,
                PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
