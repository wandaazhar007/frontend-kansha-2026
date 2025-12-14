// app/menu/types.ts
export type ProductCategory = "hibachi" | "sushi" | "side" | "appetizer";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  imageUrls?: string[];
  isAvailable?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type ProductsResponse = {
  products: Product[];
};