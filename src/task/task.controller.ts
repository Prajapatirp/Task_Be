import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { AddTaskDto, ListOfTasKDto, UpdateTaskDto } from './dto/task.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'This api to edit Hsn-sac.' })
  @Post()
  create(@Body() createTaskDto: AddTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'This api to edit Hsn-sac.' })
  @Post('list')
  findAll(@Body() listDto: ListOfTasKDto) {
    return this.taskService.findAll(listDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'This api to edit Hsn-sac.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'This api to edit Hsn-sac.' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'This api to edit Hsn-sac.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
