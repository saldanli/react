import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  getProductById(id: string): Product {
    //console.log(this.products);

    if (this.products.length == 0) {
      this.products = this.getAllProducts();
    }

    return this.products.find((product) => product.id.toString() === id);
  }

  getAllProducts(): Product[] {
    const products = JSON.parse(fs.readFileSync('data/products.json', 'utf8'));

    this.products = products;
    return this.products;
  }

  getProductByType(type: string): Product[] {
    if (this.products.length == 0) {
      this.products = this.getAllProducts();
    }

    return this.products.filter((product) => product.type.toString() === type);
  }

  getProductByName(name: string): Product[] {
    if (this.products.length == 0) {
      this.products = this.getAllProducts();
    }

    return this.products.filter(
      (product) => product.name.split(' - ')[0].toString() === name,
    );
  }

  removeProduct(productId: string) {
    if (this.products.length == 0) {
      this.products = this.getAllProducts();
    }

    this.products = this.products.filter(
      (product) => product.id.toString() !== productId.toString(),
    );
    return true;
  }

  addProduct(product: Product) {
    if (this.products.length == 0) {
      this.products = this.getAllProducts();
    }

    return this.products.push(product);
  
  }
}
