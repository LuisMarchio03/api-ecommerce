import { IOrdersRepository } from "@modules/orders/repositories/IOrdersRepository";
import { Order } from "@modules/orders/infra/typeorm/entities/Order";
import { inject, injectable } from "tsyringe";

@injectable()
class ReadOrderUseCase {
  constructor(
    @inject("OrdersRepository")
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(id: string): Promise<Order> {
    return await this.ordersRepository.findById(id);
  }
}

export { ReadOrderUseCase };
