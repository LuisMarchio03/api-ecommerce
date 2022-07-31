import { Product } from "@modules/products/infra/typeorm/entities/Product";

interface IOrderResponseDTO {
  id: string;
  user: {
    email: string;
    name: string;
    id: string;
    avatar: string;
    avatar_url(): string;
  };
  user_id: string;
  product: {
    name: string;
    brand: string;
    price: number;
    category_id: string;
    photo: string;
  };
  product_id: string;
  created_at: Date;
}

export { IOrderResponseDTO };
