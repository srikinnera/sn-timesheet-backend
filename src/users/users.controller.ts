import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { user_account_info } from './users.entity';


@Controller('users')
export class UsersController {
  constructor(private readonly usersRepository: UsersRepository) {}
  
  @Get()
  async findAll(): Promise<user_account_info[]> {
    return this.usersRepository.findAll();
  }

  // http://localhost:8080/users/john.doe@example.com
  @Get(':email_id')
  async getUserIdByEmail(@Param('email_id') emailId: string): Promise<number | null> {
    const user = await this.usersRepository.findOne(emailId);
    console.log(user) 
    if (user) {
      return user.user_id;
    } else {
      return null;
    }
  }
}