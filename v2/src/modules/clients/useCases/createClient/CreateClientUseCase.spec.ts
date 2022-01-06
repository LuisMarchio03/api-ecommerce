import { ClientRepositoryInMemory } from "./../../repositories/in-memory/ClientRepositoryInMemory";
import { CreateClientUseCase } from "./CreateClientUseCase";

let clientRepositoryInMemory: ClientRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;

describe("Create Client", () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    createClientUseCase = new CreateClientUseCase(clientRepositoryInMemory);
  });

  it("should be able to create a new client", async () => {
    const client = await createClientUseCase.execute({
      name: "Client Test",
      cpf: Number("00022233388"),
      about: "About client Test",
      email: "client@example.com",
      password: "123456",
    });

    expect(client).toHaveProperty("id");
  });
});
