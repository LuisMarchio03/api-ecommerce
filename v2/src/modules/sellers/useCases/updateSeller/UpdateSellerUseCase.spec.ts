import { SellerRepositoryInMemory } from "../../repositories/in-memory/SellerRepositoryInMemory";
import { UpdateSellerUseCase } from "./UpdateSellerUseCase";

let sellerRepositoryInMemory: SellerRepositoryInMemory;
let updateSellerUseCase: UpdateSellerUseCase;

describe("Update Seller", () => {
  beforeEach(() => {
    sellerRepositoryInMemory = new SellerRepositoryInMemory();
    updateSellerUseCase = new UpdateSellerUseCase(sellerRepositoryInMemory);
  });

  it("should not be able to update a seller does not exist", async () => {
    expect(async () => {
      const create = {
        name: "Teste Seller",
        email: "teste@example.com",
        password: "123",
        phone: "64999918525",
        cpf: "06674117129",
        city: "mineiros",
        address: "praça bispo dom benedito",
        number: "SN",
        cep: "75832055",
      };
      await sellerRepositoryInMemory.create(create);

      const update = {
        id: "1234",
        name: "Teste Seller Updated",
        email: "teste_updated@example.com",
        password: "123456",
        phone: "649999745305",
        cpf: "00055544428",
        city: "mineiros Go",
        address: "praça bispo dom benedito qd.16 lt.6A",
        number: "222",
        cep: "75832080",
      };
      await updateSellerUseCase.execute(update);
    }).rejects.toBeInstanceOf(Error);
  });

  it("should be able to update a seller", async () => {
    const create = {
      name: "Teste Seller",
      email: "teste@example.com",
      password: "123",
      phone: "64999918525",
      cpf: "06674117129",
      city: "mineiros",
      address: "praça bispo dom benedito",
      number: "SN",
      cep: "75832055",
    };
    const createdSeller = await sellerRepositoryInMemory.create(create);

    const update = {
      id: createdSeller.id,
      name: "Teste Seller Updated",
      email: "teste_updated@example.com",
      password: "123456",
      phone: "649999745305",
      cpf: "00055544428",
      city: "mineiros Go",
      address: "praça bispo dom benedito qd.16 lt.6A",
      number: "222",
      cep: "75832080",
    };
    const updatedSeller = await updateSellerUseCase.execute(update);

    expect(updatedSeller.id).toEqual(createdSeller.id);
    expect(updatedSeller).toEqual({
      id: createdSeller.id,
      name: "Teste Seller Updated",
      email: "teste_updated@example.com",
      password: expect.anything(),
      phone: "649999745305",
      cpf: "00055544428",
      city: "mineiros Go",
      address: "praça bispo dom benedito qd.16 lt.6A",
      number: "222",
      cep: "75832080",
    });
  });
});
