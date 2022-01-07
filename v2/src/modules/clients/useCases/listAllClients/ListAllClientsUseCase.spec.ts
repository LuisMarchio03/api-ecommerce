import { ClientRepositoryInMemory } from "./../../repositories/in-memory/ClientRepositoryInMemory";
import { ListAllClientsUseCase } from "./ListAllClientsUseCase";

let clientRepositoryInMemory: ClientRepositoryInMemory;
let listAllClientsUseCase: ListAllClientsUseCase;

describe("List all Clients", () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    listAllClientsUseCase = new ListAllClientsUseCase(clientRepositoryInMemory);
  });

  it("should be able to list all clients", async () => {
    const client = await clientRepositoryInMemory.create({
      name: "Client Test",
      cpf: "00022233388",
      about: "About client Test",
      email: "client@example.com",
      password: "123456",
    });

    const results = await listAllClientsUseCase.execute();

    expect(results).toEqual([client]);
  });
});
