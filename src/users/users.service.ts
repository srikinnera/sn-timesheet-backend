import { Injectable } from '@nestjs/common';
import { users_account_info } from './users.entity';

export type User = users_account_info;

@Injectable()
export class UsersService {
    private readonly users = [
        {
          user_id: 1,
          email_id: 'john',
          password: 'changeme',
        },
        {
          user_id: 2,
          email_id: 'maria',
          password: 'guess',
        },
      ];
    
      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.email_id === username);
      }
}
