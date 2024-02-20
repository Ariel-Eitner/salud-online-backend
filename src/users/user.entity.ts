import { UserInformation } from 'src/user_information/user_information.entity';
import { UserType } from 'src/user_type/user_type.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  first_name: string;

  @Column({ length: 100 })
  last_name: string;

  @Column({ length: 100 })
  email: string;

  @ManyToOne(() => UserType)
  @JoinColumn({ name: 'user_type' })
  user_type: UserType;

  @ManyToOne(() => UserInformation)
  @JoinColumn({ name: 'user_info' })
  user_info: UserInformation;
}
