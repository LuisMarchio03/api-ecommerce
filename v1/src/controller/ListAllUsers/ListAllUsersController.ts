import { ListAllUsersServices } from "../../services/ListAllUsers/ListAllUsersServices";
import { Request, Response } from "express";

export class ListAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listAllUsersServices = new ListAllUsersServices();
      const results = await listAllUsersServices.execute();

      return response.status(201).json(results);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
