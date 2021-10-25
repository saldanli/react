import { ProductService } from './product.service';
import { Product } from './product.model';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): Product[];
    getProductById(id: string): Product;
    getProductByType(type: string): Product[];
    getProductByName(name: string): Product[];
    removeProduct(id: string): boolean;
    pushProduct(id: any, name: any, type: any, link: any, description: any): void;
}
