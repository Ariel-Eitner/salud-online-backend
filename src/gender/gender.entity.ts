// gender.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('gender')
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;
}
