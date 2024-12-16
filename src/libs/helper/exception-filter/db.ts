import { Injectable } from '@nestjs/common';
import { Mongoose } from 'mongoose';

@Injectable()
export class DBConnection {
  private readonly connection: Mongoose;

  constructor() {
    this.connection = new Mongoose();
    this.connection.connect('mongodb://localhost:27017/task');
  }
}
