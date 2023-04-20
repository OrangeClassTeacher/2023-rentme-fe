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
  name: string;
  picture: string;
  description: string;
  instructor: IUser;
  level: ICourseLevel;
  category: IProductCategory;
  requirements: string[];
  goals: string[];
  reviews: ICourseReview[];
  sections: ICourseSection[];
  readCount: number;
  purchaseCount: number;
  price: number;
  discountPrice: number;
  isPublished: boolean;
  avgRating: number;
  createdAt: string;
  updatedAt: string;
};