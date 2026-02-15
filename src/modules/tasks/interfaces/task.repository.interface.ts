import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

export interface ITaskRepository {
  create(createTaskDto: CreateTaskDto): Task;
  findAll(): Task[];
  findOne(id: string): Task;
  update(id: string, updateTaskDto: UpdateTaskDto): Task;
  remove(id: string): void;
}
