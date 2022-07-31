import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { OrdersRepositoryInMemory } from "@modules/orders/repositories/in-memory/OrdersRepositoryInMemory";
import { ReadOrdersUseCase } from "./ReadOrdersUseCase";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

let ordersRepositoryInMemory: OrdersRepositoryInMemory;
let readOrdersUseCase: ReadOrdersUseCase;

describe("Read Orders", () => {
  beforeEach(() => {
    ordersRepositoryInMemory = new OrdersRepositoryInMemory();
    readOrdersUseCase = new ReadOrdersUseCase(ordersRepositoryInMemory);
  });

  it("should be able to read all orders", async () => {
    const { orders } = ordersRepositoryInMemory;

    orders.push(
      {
        id: "1",
        product_id: "2",
        user_id: "3",
        created_at: new Date(),
        product: new Product(),
        user: new User(),
      },
      {
        id: "2",
        product_id: "6",
        user_id: "7",
        created_at: new Date(),
        product: new Product(),
        user: new User(),
      }
    );

    const results = await readOrdersUseCase.execute();
    expect(results).toHaveLength(2);
  });
});
