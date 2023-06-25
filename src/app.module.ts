import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimesheetModule } from './timesheet/timesheet.module';
import { day_timesheet } from './timesheet/timesheet.entity';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
      host: "34.94.216.219",
      port: 3306,
      username: 'root',
      password: "Boba123!",
      database: "timesheet",
      entities: [day_timesheet],
      synchronize: true,
      autoLoadEntities: true,
  }), TimesheetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
