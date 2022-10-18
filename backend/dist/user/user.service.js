"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        createUserDto.confirmationToken = crypto.randomBytes(32).toString('hex');
        createUserDto.salt = await bcrypt.genSalt();
        createUserDto.password = await this.hashPassword(createUserDto.password, createUserDto.salt);
        createUserDto.status = false;
        try {
            await this.usersRepository.save(createUserDto);
            delete createUserDto.password;
            delete createUserDto.salt;
            return createUserDto;
        }
        catch (error) {
            if (error.code.toString() === '23505') {
                throw new common_1.ConflictException('Endereço de email já está em uso');
            }
            else {
                throw new common_1.InternalServerErrorException('Erro ao salvar o usuário no banco de dados');
            }
        }
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
    async findAll() {
        try {
            return await this.usersRepository.find();
        }
        catch (err) {
            console.log('Impossível buscar usuários');
            return null;
        }
    }
    async findOne(id) {
        const user = this.usersRepository
            .createQueryBuilder('user')
            .select(['user.nome', 'user.email'])
            .getOne();
        if (!user)
            throw new common_1.NotFoundException('Usuário não encontrado');
        return user;
    }
    async findByEmail(email) {
        return await this.usersRepository.findOneBy({ email });
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        const { nome, email, status } = updateUserDto;
        user.nome = nome ? nome : user.nome;
        user.email = email ? email : user.email;
        user.status = status === undefined ? user.status : status;
        try {
            await this.usersRepository.save(user);
            return user;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao salvar os dados no banco de dados');
        }
    }
    async remove(userId) {
        const result = await this.usersRepository.delete({ id: userId });
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Não foi encontrado um usuário com o ID informado');
        }
    }
    async checkCredentials(credentialsDto) {
        const { email, password } = credentialsDto;
        let user = new user_entity_1.User();
        user = await this.findByEmail(email);
        if (user && (await user.checkPassword(password))) {
            return user;
        }
        else {
            return null;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map