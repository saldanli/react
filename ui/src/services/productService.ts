import { APi } from "../const";

export default class ProductService {
  static api = APi;

  static async getProductByName(name: string) {
      debugger;
    const query = `/name/${name}`;
    const options = {};
    return ProductService.fetch(query, options);
  }

  static async deleteProduct(productId: string) {
    const query = `/remove/${productId}`;
    const options = {
      method: "DELETE",
    };
    return ProductService.fetch(query, options);
  }

  static async insertProduct(product: {}) {
    const query = `/add`;
    const options = {
      method: "POST",
      body: JSON.stringify(product),
    };
    return ProductService.fetch(query, options);
  }

  static async  getAllProduct() {
    const query = `/`;

    return ProductService.fetch(query, {});
  }

 

  static async fetch(query: string, options: {}) {
    query = ProductService.api + query;

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = await fetch(query, { headers, ...options });

    if (response.ok) {
      try {
        return await response.json();
      } catch {
        return true;
      }
    }
    throw response;
  }
}
