import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user_account_info } from './users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(user_account_info)
    private readonly repository: Repository<user_account_info>,
  ) {}

  async findAll(): Promise<user_account_info[]> {
    return this.repository.find();
  }

  async findOne(email_id: string): Promise<user_account_info> {
    return this.repository.findOne({ where : {email_id: email_id} });
  }

  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
