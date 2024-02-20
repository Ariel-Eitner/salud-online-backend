import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/user.entity'; // Asegúrate de que la ruta sea correcta

@Entity('patient_details')
export class PatientDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column('text')
  medical_history: string;

  @Column('text')
  allergies: string;

  @Column('text')
  current_medication: string;

  // Relación con User
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  // Otras columnas y relaciones según sea necesario
}
