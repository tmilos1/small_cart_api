import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, AfterLoad } from 'typeorm';
import { Cart } from './cart.entity'

@Entity()
export class CartItem {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int' })
    productId: number;
  
    @Column({ type: 'numeric', precision: 6, scale: 2 })
    quantity: number;
  
    @Column({ type: 'numeric', precision: 10, scale: 2 })
    unitPrice: number;
  
    total: number = 0.00;

    @ManyToOne(() => Cart, cart => cart.cartItems)
    cart: Cart;    

    @AfterLoad()
    calculateTotal() {
        this.total = this.quantity * this.unitPrice;
    }
}
