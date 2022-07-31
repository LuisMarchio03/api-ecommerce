import { Order } from "@modules/orders/infra/typeorm/entities/Order";
import { IOrdersRepository } from "@modules/orders/repositories/IOrdersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ReadOrdersUseCase {
  constructor(
    @inject("OrdersRepository")
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(): Promise<Order[]> {
    return await this.ordersRepository.findAll();
  }
}

export { ReadOrdersUseCase };
