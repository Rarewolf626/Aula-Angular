import { User } from 'src/user/entities/user.entity';
export declare class Task {
    id: string;
    name: string;
    status: string;
    users: User[];
}
