import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from 'src/products/products.module';
import { CartsController } from './carts.controller';
import { CartItemsController } from './cartItems.controller';
import { CartsService } from './carts.service';
import { CartItemsService } from './cartItems.service';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cartItem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItem]), ProductsModule],
  controllers: [CartsController, CartItemsController],
  providers: [CartsService, CartItemsService]
})
export class CartsModule {}
