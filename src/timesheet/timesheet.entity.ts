import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class day_timesheet {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  date: Date;
  
  @Column({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  date_created: Date;
  
  @Column({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  date_modified: Date;
  
  @Column({ type: 'varchar', length: 100 })
  description: string;
  
  @Column({ type: 'int' })
  rate: number;
  
  @Column({ type: 'int' })
  time: number;
}
