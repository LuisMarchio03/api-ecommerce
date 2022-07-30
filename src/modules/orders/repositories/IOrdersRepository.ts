import { ICreateOrderDTO } from "../dtos/ICreateOrderDTO";
import { Order } from "../infra/typeorm/entities/Order";

interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<void>;
  findById(id: string): Promise<Order>;
  findByProductId(product_id: string): Promise<Order>;
  updateByProductId(product_id: string, data: ICreateOrderDTO): Promise<void>;
}

export { IOrdersRepository };
