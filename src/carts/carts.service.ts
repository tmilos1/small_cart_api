import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';

import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  async create(createCartDto: CreateCartDto) {
    const newCart = this.cartRepository.create(createCartDto);
    return await this.cartRepository.save(newCart);
  }

  async findAll() {
    return await this.cartRepository.find()
  }

  async findOne(id: number) {
    return await this.cartRepository.findOne(id)
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const cart = await this.cartRepository.findOneOrFail(id);
    const updatedCart = {...cart, ...updateCartDto};
    return await this.cartRepository.save(updatedCart);
  }

  async remove(id: number) {
    const cart = await this.cartRepository.findOneOrFail(id);
    return await this.cartRepository.remove(cart);
  }
}
