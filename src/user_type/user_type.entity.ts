// user_type.entity.ts

import { User } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('user_types')
export class UserType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  type: string;

  @OneToMany(() => User, (user) => user.user_type)
  users: User[];
}
