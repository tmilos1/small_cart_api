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
  
    @Column({ length: 1000, default: '' })
    description: string;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    unitPrice: number;    
}
