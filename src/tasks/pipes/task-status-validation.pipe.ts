import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../tasks-status.enum';

const validTaskStatues = Object.values(TaskStatus) as TaskStatus[];

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (!validTaskStatues.includes(value)) {
      throw new BadRequestException(`${value} is not a valid task status`);
    }
    return value;
  }
}
