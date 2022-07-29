interface ICreateProductsDTO {
  product_id_stripe?: string;
  name: string;
  brand: string;
  price: number;
  quantities: number;
  category_id: string;
}

export { ICreateProductsDTO };
