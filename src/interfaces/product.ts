import { IUser } from "./user";

export interface IProductCategory {
  _id: string;
  name: string;
  description?: string;
  image: string;
  slug: string;
  courseCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Iproduct {
  _id: string;
  itemName: string;
  itemPhoto: string;
  description: string;
  categoryId: string;
  phoneNuber: number;
  rating: number;
  rentalPrice: number;
  rentalDate: string;
}
