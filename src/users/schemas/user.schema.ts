import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  phoneNumber: string;

  @Prop({ default: 'farmer' })
  role: string;

  @Prop()
  farmName: string;

  @Prop()
  location: string;

  @Prop()
  region: string;

  @Prop()
  farmSize: number;

  @Prop([String])
  currentCrops: string[];

  @Prop()
  profileImageUrl: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);