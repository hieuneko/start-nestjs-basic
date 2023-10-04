import {MigrationInterface, QueryRunner} from "typeorm"

export class InsertSampleUsers1696407181810 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "user" ("id", "name", "age")
            VALUES (UUID(), 'Joe Hoe', 22),
                   (UUID(), 'ChoBiden', 60),
                   (UUID(), 'Albert', 27);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
