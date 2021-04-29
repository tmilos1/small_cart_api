import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CartItem } from './cartItem.entity'

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    shippingFirstName: string;    

    @Column({ length: 100 })
    shippingLastName: string;    

    @Column({ length: 10 })
    shippingCountryCode: string;    

    @Column({ length: 200 })
    shippingStreet: string;

    @Column({ length: 100 })
    shippingCity: string;

    @Column({ length: 50 })
    shippingPostcode: string;    
  
    @OneToMany(type => CartItem, cartItem => cartItem.cart)
    cartItems: CartItem[];    
}
