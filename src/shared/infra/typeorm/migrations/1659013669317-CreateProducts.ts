import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1659013669317 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    new Table({
      name: "products",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "brand",
          type: "varchar",
        },
        {
          name: "price",
          type: "numeric",
        },
        {
          name: "quantities",
          type: "numeric",
        },
        {
          name: "category_id",
          type: "uuid",
          isNullable: true,
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
      ],
      foreignKeys: [
        {
          name: "FKCategoryProduct",
          referencedTableName: "categories",
          referencedColumnNames: ["id"],
          columnNames: ["category_id"],
          onDelete: "SET NULL",
          onUpdate: "SET NULL",
        },
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
