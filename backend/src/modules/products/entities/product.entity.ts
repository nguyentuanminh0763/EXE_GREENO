import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Đánh dấu đây là một entity, map tới bảng 'product' trong database
export class Product {
  @PrimaryGeneratedColumn('uuid') // PK kiểu UUID
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ default: true })
  isActive: boolean;
}
