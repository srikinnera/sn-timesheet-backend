export class CreateTimesheetDto {
    description: string;
    rate: number;
    timesheetForm: TimesheetForm[];
    user_id: number;
  }
  
  export class TimesheetForm {
    date: Date;
    time: number;
  }