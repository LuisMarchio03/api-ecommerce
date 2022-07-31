import { inject, injectable } from "tsyringe";

import { IOrderResponseDTO } from "@modules/orders/dtos/IOrderResponseDTO";
import { IOrdersRepository } from "@modules/orders/repositories/IOrdersRepository";
import { OrdersMap } from "@modules/orders/mapper/OrdersMap";

@injectable()
class ReadOrdersUseCase {
  constructor(
    @inject("OrdersRepository")
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(): Promise<IOrderResponseDTO[]> {
    const orders = await this.ordersRepository.findAll();
    return OrdersMap.toDTO(orders);
  }
}

export { ReadOrdersUseCase };
