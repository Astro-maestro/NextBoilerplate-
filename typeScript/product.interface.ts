// Product Interfaces
export interface CreateProductRequest {
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number; // Quantity in stock
    isActive: boolean;
    images: string[]; // Array of image URLs
  }
  

  