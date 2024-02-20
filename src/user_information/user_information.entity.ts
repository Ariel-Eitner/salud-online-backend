// user-information.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/user.entity';
import { Gender } from 'src/gender/gender.entity';

@Entity('user_information')
export class UserInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ length: 20 })
  dni: string;

  @Column({ length: 20 })
  phone: string;

  @Column()
  birth_date: Date;

  @ManyToOne(() => Gender)
  @JoinColumn({ name: 'gender_id' })
  gender: Gender;

  // Relación con User
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
