import { ProductService } from './product/product.service';
import { Product } from './product/product.model';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): Product[];
    getProduct(id: string): Product;
    pushProduct(id: any): void;
}
