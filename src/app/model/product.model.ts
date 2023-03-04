export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
}


export interface ProductsShop extends Omit<Product, ''> {
  count: number;
}
