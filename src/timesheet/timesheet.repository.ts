import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { day_timesheet } from './timesheet.entity';

@Injectable()
export class TimesheetRepository {
  constructor(
    @InjectRepository(day_timesheet)
    private readonly repository: Repository<day_timesheet>,
  ) {}

  async findAll(): Promise<day_timesheet[]> {
    console.log(this.repository)
    return this.repository.find();
  }
}
