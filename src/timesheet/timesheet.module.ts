import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimesheetController } from './timesheet.controller';
import { TimesheetRepository } from './timesheet.repository';
import { day_timesheet } from './timesheet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([day_timesheet])],
  controllers: [TimesheetController],
  providers: [TimesheetRepository],
})
export class TimesheetModule {}
