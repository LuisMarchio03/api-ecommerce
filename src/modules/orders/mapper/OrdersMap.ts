import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { Order } from "@modules/orders/infra/typeorm/entities/Order";
import { classToClass } from "class-transformer";
import { IOrderResponseDTO } from "../dtos/IOrderResponseDTO";

class OrdersMap {
  static toDTO(data: Order[]): IOrderResponseDTO[] {
    const results = data.map((order: Order) => ({
      id: order.id,
      user_id: order?.user_id,
      product_id: order?.product_id,
      created_at: order?.created_at,
      user: {
        id: order?.user?.id,
        name: order?.user?.name,
        email: order?.user?.email,
        avatar: order?.user?.avatar,
        avatar_url: order?.user?.avatar_url,
      },
      product: {
        name: order?.product?.name,
        brand: order?.product?.brand,
        price: order?.product?.price,
        category_id: order?.product?.category_id,
        photo: order?.product?.photo,
      },
    }));

    return classToClass(results);
  }
}

export { OrdersMap };
