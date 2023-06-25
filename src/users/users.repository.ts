import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users_account_info } from './users.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(users_account_info)
    private readonly repository: Repository<users_account_info>,
  ) {}

  async findAll(): Promise<users_account_info[]> {
    console.log(this.repository)
    return this.repository.find();
  }
}
