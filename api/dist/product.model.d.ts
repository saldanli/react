export interface Product {
    id: string;
    name: string;
    type: string;
    price: number;
    shipping: number;
    description: string;
    manufacturer: string;
    model: string;
    image: string;
    status: ProductStatus;
}
export declare enum ProductStatus {
    PRIVATE = "private",
    PUBLIC = "public"
}
