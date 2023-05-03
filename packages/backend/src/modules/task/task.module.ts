import { Module } from '@nestjs/common'
import { PrismaModule } from '@modules/prisma/prisma.module'
import { TaskResolver } from './task.resolver'
import { TaskService } from './task.service'

@Module({
  providers: [TaskResolver, TaskService],
  imports: [PrismaModule],
})
export class TaskModule {}
