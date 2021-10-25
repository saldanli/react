import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import { ProductService } from './product.service';

import { Product, ProductStatus } from './product.model';
import { HttpExceptionFilter } from 'filter/HttpExceptionFilter';

@Controller('/product')
// http error handling
@UseFilters(new HttpExceptionFilter())
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  getAllProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  @Get('/:id')
  getProductById(@Param('id') id: string): Product {
    return this.productService.getProductById(id);
  }

  @Get('/type/:type')
  getProductByType(@Param('type') type: string): Product[] {
    return this.productService.getProductByType(type);
  }

  @Get('/name/:name')
  getProductByName(@Param('name') name: string): Product[] {
    return this.productService.getProductByName(name);
  }

  @Delete('remove/:id')
  removeProduct(@Param('id') id: string) {
    return this.productService.removeProduct(id);
  }

  //Metra

  @Post('/add')
  pushProduct(
    @Body('id') id,
    @Body('name') name,
    @Body('type') type,
    @Body('link') link,
    @Body('description') description,
  ) {
    
    
    
    const product: Product = {
      id: Math.floor(Math.random() * 6).toString(),
      name,
      type,
      price: 0,
      shipping: 0,
      description,
      manufacturer: '',
      model: '',
      image: '',
      status: ProductStatus.PRIVATE,
    };

    return this.productService.addProduct(product);
  }
}
