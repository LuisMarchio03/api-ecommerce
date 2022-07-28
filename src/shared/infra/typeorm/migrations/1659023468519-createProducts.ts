import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class createProducts1659023468519 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "category_id",
            type: "uuid",
            isNullable: true,
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
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "products",
      new TableForeignKey({
        name: "FKCategoryProduct",
        referencedTableName: "categories",
        referencedColumnNames: ["id"],
        columnNames: ["category_id"],
        onDelete: "CASCADE",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "products_categories",
      "FKCategoryProduct"
    );

    await queryRunner.dropTable("products");
  }
}
