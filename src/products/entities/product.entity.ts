import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Index()
    @Column({ length: 30 })
    sku: string;
  
    @Column({ length: 200 })
    name: string;
  
    @Column({ length: 1000 })
    description: string;
}
