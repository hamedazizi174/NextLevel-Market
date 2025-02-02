import { ReactNode } from "react";

export type ChildrenType = {
  children: ReactNode;
};

export type UserSigninType = {
  username: string;
  password: string;
};

export type RatingType = {
  rate: number;
  count: number;
};

export type CategoryType = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
};

export type SubcategoryType = {
  _id: string;
  category: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
};

export type ProductType = {
  rating: RatingType;
  _id: string;
  category: CategoryType;
  subcategory: SubcategoryType;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  description: string;
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  slugname: string;
};

export type UserType = {
  _id: string;
  firstname: string;
  lastname: string;
  userName: string;
  phoneNumber: string;
  address: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type OrederProductsItem = {
  product: ProductType;
  count: number;
  _id: string;
};

export type OrderType = {
  _id: string;
  user: UserType;
  products: OrederProductsItem[];
  totalPrice: number;
  deliveryDate: string;
  deliveryStatus: boolean;
  createdAt: string;
  updatedAt: string;
};
