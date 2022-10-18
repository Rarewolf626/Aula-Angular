import { Task } from 'src/task/entities/task.entity';
export declare class User {
    id: string;
    nome: string;
    email: string;
    password: string;
    status: boolean;
    confirmationToken: string;
    salt: string;
    createAt: Date;
    updateAt: Date;
    task: Task;
    checkPassword(password: string): Promise<boolean>;
}
