import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { StatusEnum } from 'src/libs/utils/constants/enum';

export class AddTaskDto {
  @ApiProperty({
    example: 'Task 1',
    type: 'string',
    format: 'string',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    type: 'string',
    format: 'string',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'HSN',
    type: 'string',
    format: 'string',
    required: true,
  })
  @IsEnum({
    All: StatusEnum.ALL,
    Done: StatusEnum.DONE,
    InProgress: StatusEnum.INPROGRESS,
    Todo: StatusEnum.TODO,
  })
  @IsNotEmpty()
  status: string;
}

export class UpdateTaskDto {
  @ApiProperty({
    example: 'Task 1',
    type: 'string',
    format: 'string',
    required: false,
  })
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({
    example: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    type: 'string',
    format: 'string',
    required: false,
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    example: 'All',
    type: 'string',
    format: 'string',
    required: false,
  })
  @IsEnum({
    All: StatusEnum.ALL,
    Done: StatusEnum.DONE,
    InProgress: StatusEnum.INPROGRESS,
    Todo: StatusEnum.TODO,
  })
  @IsOptional()
  status: string;
}

export class ListOfTasKDto {
  @ApiProperty({
    example: 'All',
    type: 'string',
    format: 'string',
    required: false,
  })
  @IsEnum({
    All: StatusEnum.ALL,
    Done: StatusEnum.DONE,
    InProgress: StatusEnum.INPROGRESS,
    Todo: StatusEnum.TODO,
  })
  @IsOptional()
  status: string;
}
