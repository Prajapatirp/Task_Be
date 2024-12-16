import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  status: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
