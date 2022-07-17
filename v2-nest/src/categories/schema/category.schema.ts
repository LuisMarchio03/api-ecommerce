import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ type: MongooseSchema.Types.ObjectId })
  id: string;

  @Prop()
  name: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
