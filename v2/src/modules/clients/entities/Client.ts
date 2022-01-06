import { v4 as uuidV4 } from "uuid";

export class Client {
  id: string;
  name: string;
  cpf: number;
  about: string;
  email: string;
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
