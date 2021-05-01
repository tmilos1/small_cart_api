import { Controller, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { CartItemsService } from './cartItems.service';
import { CreateCartItemDto } from './dto/create-cartItem.dto';
import { UpdateCartItemDto } from './dto/update-cartItem.dto';

@Controller('carts/:cartId')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Post('cartItems')
  create(@Param('cartId') cartId: number, @Body() createCartDto: CreateCartItemDto) {
    return this.cartItemsService.create(+cartId, createCartDto);
  }

  @Patch('cartItems/:cartItemId')
  update(@Param('cartItemId') cartItemId: number, @Body() updateCartDto: UpdateCartItemDto) {
    return this.cartItemsService.update(+cartItemId, updateCartDto);
  }

  @Delete('cartItems/:cartItemId')
  @HttpCode(204)
  remove(@Param('cartItemId') cartItemId: number) {
      this.cartItemsService.remove(+cartItemId);
  }
}