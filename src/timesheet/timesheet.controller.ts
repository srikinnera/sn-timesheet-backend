import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TimesheetRepository } from './timesheet.repository';
import { day_timesheet } from './timesheet.entity';


@Controller('timesheets')
export class TimesheetController {
  constructor(private readonly timesheetRepository: TimesheetRepository) {}
  
  @Get()
  async findAll(): Promise<day_timesheet[]> {
    return this.timesheetRepository.findAll();
  }
  
  // @Post()
  // async create(@Body() timesheetData: Timesheet): Promise<Timesheet> {
  //   const timesheet = this.timesheetRepository.create(timesheetData);
  //   return this.timesheetRepository.save(timesheet);
  // }
}
