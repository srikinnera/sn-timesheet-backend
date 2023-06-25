import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class users_account_info {
  @PrimaryGeneratedColumn()
  user_id: number;
  
  @Column({ type: 'varchar', length: 100 })
  email_id: string;
  
  @Column({ type: 'varchar', length: 100 })
  password: string;

}