import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { OrdersRepositoryInMemory } from "@modules/orders/repositories/in-memory/OrdersRepositoryInMemory";
import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { ReadOrderUseCase } from "./ReadOrderUseCase";

let ordersRepositoryInMemory: OrdersRepositoryInMemory;
let readOrderUseCase: ReadOrderUseCase;

describe("Read Order", () => {
  beforeEach(() => {
    ordersRepositoryInMemory = new OrdersRepositoryInMemory();
    readOrderUseCase = new ReadOrderUseCase(ordersRepositoryInMemory);
  });

  it("should be able to read order", async () => {
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

    const result = await readOrderUseCase.execute(orders[1]?.id);

    expect(result).toBeTruthy();
    expect(result.product_id).toEqual("6");
    expect(result.user_id).toEqual("7");
  });
});
