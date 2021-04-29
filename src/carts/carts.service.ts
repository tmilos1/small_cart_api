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
    return this.cartRepository.create(createCartDto);
  }

  async findAll() {
    return await this.cartRepository.find()
  }

  async findOne(id: number) {
    return await this.cartRepository.findOne(id)
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const cart = await this.cartRepository.findOneOrFail(id);
    return this.cartRepository.save(updateCartDto);
  }

  async remove(id: number) {
    const cart = await this.cartRepository.findOneOrFail(id);
    return await this.cartRepository.remove(cart);
  }
}
