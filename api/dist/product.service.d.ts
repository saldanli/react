import { Product } from './product.model';
export declare class ProductService {
    private products;
    getProductById(id: string): Product;
    getAllProducts(): Product[];
}
