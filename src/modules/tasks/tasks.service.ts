import { Injectable, Inject } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { ITaskRepository } from './interfaces/task.repository.interface';

@Injectable()
export class TasksService {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepository: ITaskRepository,
  ) {}

  create(createTaskDto: CreateTaskDto): Task {
    return this.taskRepository.create(createTaskDto);
  }

  findAll(): Task[] {
    return this.taskRepository.findAll();
  }

  findOne(id: string): Task {
    return this.taskRepository.findOne(id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    return this.taskRepository.update(id, updateTaskDto);
  }

  remove(id: string): void {
    return this.taskRepository.remove(id);
  }
}
