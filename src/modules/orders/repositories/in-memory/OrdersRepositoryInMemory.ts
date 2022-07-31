import { ICreateOrderDTO } from "@modules/orders/dtos/ICreateOrderDTO";
import { Order } from "@modules/orders/infra/typeorm/entities/Order";
import { IOrdersRepository } from "@modules/orders/repositories/IOrdersRepository";

class OrdersRepositoryInMemory implements IOrdersRepository {
  public orders: Order[] = [];

  async create({ product_id, user_id }: ICreateOrderDTO): Promise<void> {
    const order = new Order();

    Object.assign(order, {
      product_id,
      user_id,
    });

    this.orders.push(order);
  }

  async findById(id: string): Promise<Order> {
    return this.orders.find((order) => order.id === id);
  }

  async findAll(): Promise<Order[]> {
    return this.orders;
  }

  findByProductId(product_id: string): Promise<Order> {
    throw new Error("Method not implemented.");
  }

  updateByProductId(product_id: string, data: ICreateOrderDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { OrdersRepositoryInMemory };
