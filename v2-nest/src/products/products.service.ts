import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products, ProductsDocument } from './schema/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name)
    private productModel: Model<ProductsDocument>,
  ) {}

  private async searchProductsByName(search: string) {
    return await this.productModel.find().sort({ name: search }).exec();
  }

  async create(createProductDto: CreateProductDto) {
    return this.productModel.create({
      name: createProductDto.name,
      price: Number(createProductDto.price),
      quantity: Number(createProductDto.quantity),
      categoryId: createProductDto.categoryId,
    });
  }

  async findAll(skip: number, search: string) {
    if (search) {
      return this.searchProductsByName(search);
    }

    return this.productModel.find().skip(skip).limit(8).exec();
  }

  async findOne(id: string) {
    return this.productModel.findById(id);
  }

  async findProductByCategoryId(categoryId: string) {
    return this.productModel.find({ categoryId: categoryId });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.productModel.findByIdAndUpdate(id, {
      name: updateProductDto.name,
      price: Number(updateProductDto.price),
      quantity: Number(updateProductDto.quantity),
      categoryId: updateProductDto.categoryId,
    });
  }

  async remove(id: string) {
    await this.productModel.findByIdAndDelete(id);
  }
}
