import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now, Schema as MongooseSchema } from 'mongoose';
import { Category } from '../../categories/schema/category.schema';

export type ProductsDocument = Products & Document;

@Schema()
export class Products {
  @Prop({ type: MongooseSchema.Types.ObjectId })
  id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category', default: null })
  categoryId: Category;

  @Prop({ default: null })
  name: string;

  @Prop({ default: null })
  quantity: number;

  @Prop({ default: null })
  price: number;

  @Prop({ default: now() })
  created_at: Date;

  @Prop({ default: now() })
  updated_at: Date;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
