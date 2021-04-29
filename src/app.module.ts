import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    CartsModule,
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'testing',
      database: 'carts_api',
      entities: [
          __dirname + '/**/entities/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
    ProductsModule,
  ],
})
export class AppModule { }
