import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer'; // Dùng để ẩn field khi trả về response

@Entity('users') // Decorator để định nghĩa đây là entity map tới table 'users'
export class User {
  @PrimaryGeneratedColumn('uuid') // Tạo UUID tự động làm primary key
  id: string;

  @Column({ unique: true }) // Column với constraint unique
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @Exclude() // Ẩn password khỏi response JSON
  password: string;

  @Column({ default: true }) // Giá trị mặc định
  isActive: boolean;

  @CreateDateColumn() // Tự động tạo timestamp khi tạo record
  createdAt: Date;

  @UpdateDateColumn() // Tự động cập nhật timestamp khi update
  updatedAt: Date;
}
