import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
export declare class TaskService {
    private usersRepository;
    constructor(usersRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Task[]>;
    findOne(id: number): string;
    update(id: number, updateTaskDto: UpdateTaskDto): string;
    remove(id: number): string;
}
