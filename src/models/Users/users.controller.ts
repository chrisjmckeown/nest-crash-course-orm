import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // @Get()
  // async createUser(): Promise<string> {
  //   return 'hello world';
  // }
  @Get()
  async createUser(): Promise<Users> {
    return this.usersService.createUser('Chris', 'Mckeown');
  }
}
