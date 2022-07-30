import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateOrders1659218530579 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orders",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "product_id",
            type: "uuid",
            isNullable: true,
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
      "orders",
      new TableForeignKey({
        name: "FKUserOrder",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["user_id"],
        onDelete: "CASCADE",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "orders",
      new TableForeignKey({
        name: "FKProductOrder",
        referencedTableName: "products",
        referencedColumnNames: ["id"],
        columnNames: ["product_id"],
        onDelete: "CASCADE",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("orders", "FKProductOrder");

    await queryRunner.dropForeignKey("orders", "FKUserOrder");

    await queryRunner.dropTable("orders");
  }
}
