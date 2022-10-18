import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CredentialsDto } from 'src/user/dto/credentials.dto';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { User } from './../user/entities/user.entity';
export declare class AuthService {
    private userRepository;
    private readonly userService;
    private jwtService;
    constructor(userRepository: Repository<User>, userService: UserService, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    signIn(credentialsDto: CredentialsDto): Promise<{
        token: string;
    }>;
}
