import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  id: string;
  name: string;
  quantity: number;
  price: number;
  categoryId: string;
}
