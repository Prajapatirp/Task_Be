import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { AddTaskDto, ListOfTasKDto, UpdateTaskDto } from './dto/task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/model/user.model';
import { HandleResponse } from 'src/libs/services/handleResponse';
import { ResponseData } from 'src/libs/utils/constants/enum';
import { Messages } from 'src/libs/utils/constants/message';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}
  async create(createTaskDto: AddTaskDto) {
    const createdUser = await this.userModel.create(createTaskDto);
    Logger.log(`Task is ${Messages.ADD_SUCCESS}`);

    return HandleResponse(
      HttpStatus.CREATED,
      ResponseData.SUCCESS,
      `Task is ${Messages.ADD_SUCCESS}`,
      { id: createdUser._id },
    );
  }

  async findAll(listDto: ListOfTasKDto) {

    const listOfTask: any = await this.userModel.find({...listDto});

    Logger.log(`Task is ${Messages.GET_SUCCESS}`);
    return HandleResponse(
      HttpStatus.OK,
      ResponseData.SUCCESS,
      undefined,
      listOfTask || [],
    );
  }

  async findOne(id: string) {
    const taskDetails: any = await this.userModel.findOne({ _id: id });

    if (taskDetails && Object.keys(taskDetails).length > 0) {
      Logger.log(`Task is ${Messages.GET_SUCCESS}`);
      return HandleResponse(
        HttpStatus.OK,
        ResponseData.SUCCESS,
        undefined,
        taskDetails.toJSON(),
      );
    } else {
      Logger.error(Messages.NOT_FOUND);
      return HandleResponse(HttpStatus.NOT_FOUND, Messages.NOT_FOUND);
    }
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const updateDetails = await this.userModel.updateOne(
      { _id: id },
      { $set: { ...updateTaskDto } },
    );

    if (updateDetails && updateDetails.matchedCount > 0) {
      Logger.log(`Task is ${Messages.UPDATE_SUCCESS}`);

      return HandleResponse(
        HttpStatus.OK,
        ResponseData.SUCCESS,
        `Task is ${Messages.UPDATE_SUCCESS}`,
      );
    } else {
      Logger.error(`Task is ${Messages.NOT_UPDATE}`);

      return HandleResponse(
        HttpStatus.NOT_FOUND,
        ResponseData.ERROR,
        `Task is ${Messages.NOT_UPDATE}`,
      );
    }
  }

  async remove(id: string) {
    const taskDetails: any = await this.userModel.findOne({ _id: id });

    if (taskDetails && Object.keys(taskDetails).length > 0) {
      await this.userModel.deleteOne({ _id: id });

      Logger.log(`Task is ${Messages.DELETED_SUCCESS}`);
      return HandleResponse(
        HttpStatus.OK,
        ResponseData.SUCCESS,
        `Task is ${Messages.DELETED_SUCCESS}`,
      );
    } else {
      Logger.error(Messages.NOT_FOUND);

      return HandleResponse(
        HttpStatus.NOT_FOUND,
        ResponseData.ERROR,
        Messages.NOT_FOUND,
      );
    }
  }
}
