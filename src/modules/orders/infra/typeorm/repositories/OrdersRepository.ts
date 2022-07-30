import { getRepository, Repository } from "typeorm";
import { Order } from "../entities/Order";

import { ICreateOrderDTO } from "@modules/orders/dtos/ICreateOrderDTO";
import { IOrdersRepository } from "@modules/orders/repositories/IOrdersRepository";

class OrdersRepository implements IOrdersRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = getRepository(Order);
  }

  async create({ product_id, user_id }: ICreateOrderDTO): Promise<void> {
    const order = this.repository.create({
      product_id,
      user_id,
    });

    await this.repository.save(order);
  }

  findById(id: string): Promise<Order> {
    throw new Error("Method not implemented.");
  }

  findByProductId(product_id: string): Promise<Order> {
    throw new Error("Method not implemented.");
  }

  updateByProductId(product_id: string, data: ICreateOrderDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { OrdersRepository };
