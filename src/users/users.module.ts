import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user_account_info } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([user_account_info])],
  providers: [UsersService, UsersRepository],
  controllers: [UsersController],
  exports: [UsersService,UsersRepository],
})
export class UsersModule {}
