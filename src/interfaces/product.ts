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
  _id:string
  createdUser: string;
  itemName: string;
  itemPhoto: string;
  itemSlidePhoto: string[];
  description: string;
  categoryId: string;
  phoneNumber: number;
  rating: number;
  discountPrice: number;
  isPublished: boolean;
  avgRating: number;
  review:IProductReview
  rentalPrice: number;
  rentalStartDate: Date;
  rentalEndDate: Date;
}

export interface IProductReview{
  _id: string;
  title: string;
  text?: string;
  user: IUser;
  course: Iproduct;
  rating: number;
  createdAt: string;
  updatedAt: string;
}