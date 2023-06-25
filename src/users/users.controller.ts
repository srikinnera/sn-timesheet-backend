import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { users_account_info } from './users.entity';


@Controller('users')
export class UsersController {
  constructor(private readonly usersRepository: UsersRepository) {}
  
  @Get()
  async findAll(): Promise<users_account_info[]> {
    return this.usersRepository.findAll();
  }
}