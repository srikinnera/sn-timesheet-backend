import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { day_timesheet } from './timesheet.entity';
import { CreateTimesheetDto } from './timesheet.type';

@Injectable()
export class TimesheetRepository {
  constructor(
    @InjectRepository(day_timesheet)
    private readonly repository: Repository<day_timesheet>,
  ) {}

  async findAll(): Promise<day_timesheet[]> {
    return this.repository.find();
  }

  async findByUserIdAndDate(
    userId: number,
    date: Date,
  ): Promise<day_timesheet[]> {
    return this.repository.find({ where: { user_id: userId, date_created: date } });
  }

  async create(timesheetData: CreateTimesheetDto) {
    const { description, rate, timesheetForm, user_id } = timesheetData;
    timesheetForm.map((item) => {
      const lineItem = {
        description: description,
        rate: rate,
        date: item.date,
        time: item.time,
        user_id: user_id,
        date_created: new Date().toISOString().split('T')[0]
      };

      this.repository.save(lineItem);
    });
  }
}
