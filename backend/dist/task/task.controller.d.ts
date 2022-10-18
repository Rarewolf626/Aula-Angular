import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<import("./entities/task.entity").Task[]>;
    findOne(id: string): string;
    update(id: string, updateTaskDto: UpdateTaskDto): string;
    remove(id: string): string;
}
