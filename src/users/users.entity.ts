import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class user_account_info {
  @PrimaryGeneratedColumn()
  user_id: number;
  
  @Column({ type: 'varchar', length: 100 })
  email_id: string;
  
  @Column({ type: 'varchar', length: 100 })
  password: string;

  async comparePassword(password: string): Promise<boolean> {
    return password === this.password;
  }

}