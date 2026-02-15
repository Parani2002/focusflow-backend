import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskRepository } from './repositories/task.repository';

@Module({
  controllers: [TasksController],
  providers: [
    TasksService,
    {
      provide: 'ITaskRepository',
      useClass: TaskRepository,
    },
  ],
})
export class TasksModule {}
