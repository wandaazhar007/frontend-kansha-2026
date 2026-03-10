// app/menu/types.ts
// export type ProductCategory = "hibachi" | "sushi" | "side" | "appetizer";

// export type Product = {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   category: ProductCategory;
//   imageUrls?: string[];
//   isAvailable?: boolean;
//   createdAt?: string;
//   updatedAt?: string;
// };

// export type ProductsResponse = {
//   products: Product[];
// };



// app/menu/types.ts

export type Category = {
  id: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type CategoriesResponse = {
  categories: Category[];
};

/**
 * IMPORTANT:
 * Backend products.category sekarang berisi categoryId (Firestore doc id),
 * contoh: "V9JLmsLbSKcyrabzARf1", bukan slug seperti "hibachi".
 */
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;

  // Firestore category document id
  category: string;

  imageUrls?: string[];
  isAvailable?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type ProductsResponse = {
  products: Product[];
};