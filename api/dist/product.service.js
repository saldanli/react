"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
let ProductService = class ProductService {
    constructor() {
        this.products = [];
    }
    getProductById(id) {
        if (this.products.length == 0) {
            this.products = this.getAllProducts();
        }
        return this.products.find((product) => product.id.toString() === id);
    }
    getAllProducts() {
        const products = JSON.parse(fs.readFileSync('data/products.json', 'utf8'));
        this.products = products;
        return this.products;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map