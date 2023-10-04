import {Inject, Injectable} from '@nestjs/common';
import {DeepPartial, Repository} from 'typeorm';
import {CreateUserDto} from './dto/create-user.dto';
import {User} from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private usersRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async findOne( id: string ): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { id } });
    }

    create(createProfileDto: CreateUserDto): Promise<User> {
        return this.usersRepository.save(
            this.usersRepository.create(createProfileDto),
        );
    }

    async update(id: User['id'], payload: DeepPartial<User>): Promise<User> {
        return await this.usersRepository.save(
            this.usersRepository.create({
                id,
                ...payload,
            }),
        );
    }

    async softDelete(id: User['id']): Promise<void> {
        await this.usersRepository.delete(id);
    }
}