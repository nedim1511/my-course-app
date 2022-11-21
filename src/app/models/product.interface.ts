export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
}

export interface ProductResponse {
  total: number;
  skip: number;
  limit: number;
  products: Product[];
}
