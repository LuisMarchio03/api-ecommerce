import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcryptjs';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangeUserProfileDto } from './dto/change-user-profile.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const passwordHash = await hash(createUserDto.password, 8);

    return this.userModel.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: passwordHash,
      cpf: Number(createUserDto.cpf),
      cellphone: Number(createUserDto.cellphone),
      isAdmin: createUserDto.isAdmin,
      photo: createUserDto.photo,
      balance: Number(createUserDto.balance),
    });
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email: email });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(id, {
      name: updateUserDto.name,
      email: updateUserDto.email,
      cpf: Number(updateUserDto.cpf),
      cellphone: Number(updateUserDto.cellphone),
      isAdmin: updateUserDto.isAdmin,
      photo: updateUserDto.photo,
      balance: Number(updateUserDto.balance),
    });
  }

  async changeProfile(id: string, changeUserProfileDto: ChangeUserProfileDto) {
    await this.userModel.findByIdAndUpdate(id, {
      name: changeUserProfileDto.name,
      email: changeUserProfileDto.email,
      cpf: Number(changeUserProfileDto.cpf),
      cellphone: Number(changeUserProfileDto.cellphone),
      photo: changeUserProfileDto.photo,
    });
  }

  async remove(id: string) {
    await this.userModel.findByIdAndDelete(id);
  }
}
