import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TimesheetRepository } from './timesheet.repository';
import { day_timesheet } from './timesheet.entity';
import { CreateTimesheetDto } from './timesheet.type';

@Controller('timesheets')
export class TimesheetController {
  constructor(private readonly timesheetRepository: TimesheetRepository) {}

  //http://localhost:8080/timesheets/
  @Get()
  async findAll(): Promise<day_timesheet[]> {
    return this.timesheetRepository.findAll();
  }

  //http://localhost:8080/timesheets/1/2023-06-01T07:00:00.000Z
  @Get(':userId/:date')
  async findByUserIdAndDate(
    @Param('userId') userId: number,
    @Param('date') date: Date,
  ): Promise<day_timesheet[]> {
    return this.timesheetRepository.findByUserIdAndDate(userId, date);
  }

  //http://localhost:8080/timesheets
  /*
  {
    "description": "Worked on project timesheetproj",
    "rate": 25,
    "timesheetForm": [
      {
        "date": "2023-06-01",
        "time": 9
      },
      {
        "date": "2023-06-02",
        "time": 8
      }
    ],
    "user_id": 1
  }
 */

  @Post()
  async create(@Body() timesheetData: CreateTimesheetDto) {
    this.timesheetRepository.create(timesheetData);
  }
}
