interface IUpdateProductsDTO {
  name: string;
  brand: string;
  price: number;
  quantities: number;
  categories_ids: string[];
}

export { IUpdateProductsDTO };
