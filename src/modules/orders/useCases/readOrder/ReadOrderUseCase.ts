import { inject, injectable } from "tsyringe";

import { IOrdersRepository } from "@modules/orders/repositories/IOrdersRepository";
import { IOrderResponseDTO } from "@modules/orders/dtos/IOrderResponseDTO";
import { OrderMap } from "@modules/orders/mapper/OrderMap";

@injectable()
class ReadOrderUseCase {
  constructor(
    @inject("OrdersRepository")
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(id: string): Promise<IOrderResponseDTO> {
    const order = await this.ordersRepository.findById(id);
    return OrderMap.toDTO(order);
  }
}

export { ReadOrderUseCase };
