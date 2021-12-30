import { Request, Response } from "express";
import { ListAllProductsServices } from "../../services/ListAllProducts/ListAllProductsServices";

export class ListAllProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listAllProductsServices = new ListAllProductsServices();
      const results = await listAllProductsServices.execute();

      return response.status(200).json(results);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
