export interface IUpdateProducts {
  name: string;
  description: string;
  price: number;
  id: string;
}

export interface ICreateProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category_id: string;
}

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}
