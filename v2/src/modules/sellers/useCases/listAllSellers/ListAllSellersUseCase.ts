import { injectable, inject } from "tsyringe";

import { Seller } from "../../entities/Seller";
import { ISellerRepository } from "../../repositories/ISellerRepository";

@injectable()
export class ListAllSellersUseCase {
  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) {}

  async execute(): Promise<Seller[]> {
    const sellers = await this.sellerRepository.find();
    return sellers;
  }
}
