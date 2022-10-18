import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { CredentialsDto } from './dto/credentials.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  //-----------------------------------------------------------------------------------------------
  async create(createUserDto: CreateUserDto) {
    createUserDto.confirmationToken = crypto.randomBytes(32).toString('hex');
    createUserDto.salt = await bcrypt.genSalt();
    //console.log(salt);
    createUserDto.password = await this.hashPassword(
      createUserDto.password,
      createUserDto.salt,
    );
    createUserDto.status = false;
    // console.log(createUserDto.password);

    try {
      await this.usersRepository.save(createUserDto);
      delete createUserDto.password;
      delete createUserDto.salt;
      return createUserDto;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Endereço de email já está em uso');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o usuário no banco de dados',
        );
      }
    }
  }
  //----------------------------------------------------------------------------
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
  //----------------------------------------------------------------------------
  async findAll(): Promise<User[]> {
    try {
      return await this.usersRepository.find();
    } catch (err) {
      console.log('Impossível buscar usuários');
      return null;
    }
  }
  //----------------------------------------------------------------------------
  async findOne(id: string): Promise<User> {
    const user = this.usersRepository
      .createQueryBuilder('user')
      .select(['user.nome', 'user.email'])
      .getOne();
    if (!user) throw new NotFoundException('Usuário não encontrado');

    return user;
  }
  //----------------------------------------------------------------------------
  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOneBy({ email });
  }
  //----------------------------------------------------------------------------
  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    const { nome, email, status } = updateUserDto;
    user.nome = nome ? nome : user.nome;
    user.email = email ? email : user.email;
    user.status = status === undefined ? user.status : status;
    try {
      await this.usersRepository.save(user);
      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar os dados no banco de dados',
      );
    }
  }
  //----------------------------------------------------------------------------
  async remove(userId: string) {
    const result = await this.usersRepository.delete({ id: userId });
    if (result.affected === 0) {
      throw new NotFoundException(
        'Não foi encontrado um usuário com o ID informado',
      );
    }
  }
  //----------------------------------------------------------------------------
  async checkCredentials(credentialsDto: CredentialsDto): Promise<User> {
    const { email, password } = credentialsDto;
    let user = new User();
    user = await this.findByEmail(email);

    if (user && (await user.checkPassword(password))) {
      return user;
    } else {
      return null;
    }
  }
  //----------------------------------------------------------------------------
}
