import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString, IsEnum } from 'class-validator';

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export class CreateTaskDto {
  @ApiProperty({ description: 'The title of the task', example: 'Complete project documentation' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'The description of the task', example: 'Write comprehensive documentation for the API' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'The due date of the task', example: '2026-03-01' })
  @IsDateString()
  dueDate: string;

  @ApiProperty({ description: 'The priority of the task', enum: TaskPriority, example: TaskPriority.HIGH })
  @IsEnum(TaskPriority)
  priority: TaskPriority;
}
