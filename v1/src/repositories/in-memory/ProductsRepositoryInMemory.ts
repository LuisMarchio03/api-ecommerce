import { Repository } from "typeorm";
import { Products } from "../../entities/Products";

export class ProductsRepositoryInMemory {
  products: Products[] = [];
  productsTestList: Products[] = [
    {
      name: "Example product 1",
      description: "Example description product 1",
      price: 10.0,
    },
    {
      name: "Example product 2",
      description: "Example description product 2",
      price: 20.0,
    },
    {
      name: "Example product 3",
      description: "Example description product 3",
      price: 30.0,
    },
    {
      name: "Example product 4",
      description: "Example description product 4",
      price: 40.0,
    },
  ] as Products[];

  async find(): Promise<Products[]> {
    const productAll = this.productsTestList;
    return productAll;
  }

  async findByName(name: string): Promise<Products> {
    const product = this.products.find((product) => product.name === name);
    return product;
  }

  async createProducts({ name, description, price }): Promise<Products> {
    const product = new Products();

    Object.assign(product, { name, description, price });

    this.products.push(product);

    return product;
  }

  async updateProducts({
    oldName,
    name,
    description,
    price,
  }): Promise<Products> {
    const product = this.productsTestList.find(
      (product) => product.name === oldName
    );

    product.name = name;
    product.description = description;
    product.price = price;

    return product;
  }
}
