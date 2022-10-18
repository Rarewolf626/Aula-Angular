import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CredentialsDto } from 'src/user/dto/credentials.dto';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    signIn(credentiaslsDto: CredentialsDto): Promise<{
        token: string;
    }>;
    getMe(user: User): User;
}
