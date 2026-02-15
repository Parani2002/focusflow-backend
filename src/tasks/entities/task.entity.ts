import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';
import { TaskPriority } from '../dto/create-task.dto';

export class Task extends BaseEntity {
  @ApiProperty({
    description: 'The title of the task',
    example: 'Complete project documentation',
  })
  title: string;

  @ApiProperty({
    description: 'The description of the task',
    example: 'Write comprehensive documentation for the API',
  })
  description: string;

  @ApiProperty({
    description: 'The due date of the task',
    example: '2026-03-01',
  })
  dueDate: string;

  @ApiProperty({
    description: 'The priority of the task',
    enum: TaskPriority,
    example: TaskPriority.HIGH,
  })
  priority: TaskPriority;
}
