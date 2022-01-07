export interface ICreateSellerDTO {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  city: string;
  address: string;
  number: string;
  cep: string;
}

export interface IUpdateSellerDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  city: string;
  address: string;
  number: string;
  cep: string;
}
