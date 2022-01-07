import { UpdateSellerUseCase } from "./UpdateSellerUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateSellerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, email, password, phone, cpf, city, address, number, cep } =
        request.body;

      const updateSellerUseCase = container.resolve(UpdateSellerUseCase);

      const updatedSeller = await updateSellerUseCase.execute({
        id,
        name,
        email,
        password,
        phone,
        cpf,
        city,
        address,
        number,
        cep,
      });

      return response.status(201).json(updatedSeller);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
