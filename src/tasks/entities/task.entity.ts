import { TaskPriority } from '../dto/create-task.dto';

export class Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: TaskPriority;
  createdAt: Date;
  updatedAt: Date;
}
