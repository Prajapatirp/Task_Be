import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { DBConnection } from './libs/helper/exception-filter/db';

dotenv.config();

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/public'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/task'),
    MulterModule.register({
      dest: './public/uploads',
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService, DBConnection],
})
export class AppModule {}
