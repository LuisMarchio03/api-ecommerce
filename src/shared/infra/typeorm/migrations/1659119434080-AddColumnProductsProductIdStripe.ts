import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnProductsProductIdStripe1659119434080
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "products",
      new TableColumn({
        name: "product_id_stripe",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("products", "product_id_stripe");
  }
}
