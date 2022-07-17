import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: string;
  name: string;
  email: string;
  cpf: number;
  cellphone: number;
  isAdmin: boolean;
  photo: string;
  balance: number;
  created_at: Date;
  updated_at: Date;
}
