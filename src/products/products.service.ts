import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return await this.productRepository.save(newProduct);
  }

  findAll() {
    return this.productRepository.find()
  }

  findOne(id: number) {
    return this.productRepository.findOneOrFail(id)
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOneOrFail(id);
    const updatedProduct = {...product, ...updateProductDto};
    return await this.productRepository.save(updatedProduct);
  }

  async remove(id: number) {
    const product = await this.productRepository.findOneOrFail(id);
    return await this.productRepository.remove(product);
  }
}
