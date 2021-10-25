import { Product } from './product.model';
export declare class ProductService {
    private products;
    getProductById(id: string): Product;
    getAllProducts(): Product[];
    getProductByType(type: string): Product[];
    getProductByName(name: string): Product[];
    removeProduct(productId: string): boolean;
    addProduct(product: Product): number;
}
