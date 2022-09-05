import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }
  async getOneById(id: string): Promise<Users> {
    try {
      const user = await this.usersRepository.findOneOrFail({
        where: { id: id },
      });
      return user;
    } catch (err) {
      throw err;
    }
  }

  async createUser(firstName: string, lastName: string): Promise<Users> {
    const newUser = this.usersRepository.create({ firstName, lastName });
    return this.usersRepository.save(newUser);
  }

  async updateUser(
    id: string,
    firstName: string,
    lastName: string,
  ): Promise<Users> {
    const user = await this.getOneById(id);
    user.firstName = firstName;
    user.lastName = lastName;
    return this.usersRepository.save(user);
  }

  async deleteUser(id: string): Promise<Users> {
    const user = await this.getOneById(id);
    return this.usersRepository.remove(user);
  }
}
