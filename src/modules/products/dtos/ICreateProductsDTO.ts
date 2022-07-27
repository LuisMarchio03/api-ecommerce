interface ICreateProductsDTO {
  name: string;
  brand: string;
  price: number;
  quantities: number;
  categories_ids: string[];
}

export { ICreateProductsDTO };
