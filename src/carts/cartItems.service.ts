import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cartItem.entity';

import { CreateCartItemDto } from './dto/create-cartItem.dto';
import { UpdateCartItemDto } from './dto/update-cartItem.dto';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CartItemsService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>,
    private productsService: ProductsService,
  ) {}

  async create(cartId: number, createCartItemDto: CreateCartItemDto) {
    const newCartItem = this.cartItemRepository.create(createCartItemDto);
    const cart = await this.cartRepository.findOneOrFail(cartId);
    const product = await this.productsService.findOne(createCartItemDto.productId);

    newCartItem.unitPrice = product.unitPrice;
    newCartItem.cart = cart;

    return await this.cartItemRepository.save(newCartItem);
  }

  async update(cartItemId: number, updateCartItemDto: UpdateCartItemDto) {
    const cartItem = await this.cartItemRepository.findOneOrFail(cartItemId);
    const product = await this.productsService.findOne(updateCartItemDto.productId);

    cartItem.unitPrice = product.unitPrice;
    cartItem.quantity = updateCartItemDto.quantity;

    return await this.cartItemRepository.save(cartItem);
  }

  async remove(cartItemId: number) {
    const cartItem = await this.cartItemRepository.findOneOrFail(cartItemId);
    await this.cartItemRepository.remove(cartItem);
  }
}