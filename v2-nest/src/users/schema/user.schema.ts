import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: MongooseSchema.Types.ObjectId })
  id: string;
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop({ default: null })
  password: string;
  @Prop()
  cpf: number;
  @Prop()
  cellphone: number;
  @Prop({ type: Boolean, default: false })
  isAdmin: boolean;
  @Prop()
  photo: string;
  @Prop()
  balance: number;
  @Prop()
  created_at: Date;
  @Prop()
  updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
