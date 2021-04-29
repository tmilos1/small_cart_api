import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cart } from './cart.entity'

@Entity()
export class CartItem {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 30 })
    sku: string;
  
    @Column({ type: 'numeric', precision: 6, scale: 2 })
    quantity: number;
  
    @Column({ type: 'numeric', precision: 10, scale: 2 })
    unitPrice: number;
  
    @Column({ type: 'numeric', precision: 10, scale: 2 })
    total: number;

    @ManyToOne(() => Cart, cart => cart.cartItems)
    cart: Cart;    
}
