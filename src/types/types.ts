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

export type ResAllProducts = {
  status: string;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: { products: ProductType[] };
};

export type PostingProductType = {
  category: CategoryType;
  subcategory: SubcategoryType;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  description: string;
  images: File;
};

export type UserType = {
  _id: string;
  firstname: string;
  lastname: string;
  userName: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  refreshToken: string;
};

export type OrderProductsItem = {
  product: ProductType;
  count: number;
  _id: string;
};

export type OrderType = {
  _id: string;
  user: UserType;
  products: OrderProductsItem[];
  totalPrice: number;
  deliveryDate: string;
  deliveryStatus: boolean;
  createdAt: string;
  updatedAt: string;
};

export type InventoryProductType = {
  id: string;
  rank: number;
  productName: string;
  price: number;
  quantity: number;
};

export type EditProductType = {
  product: FormData;
  productId: string;
};

export type AddToCartProductType = {
  productId: string;
  name: string;
  count: number;
  price: number;
  image: string;
};

export type CartType = {
  products: AddToCartProductType[];
  userId: string;
  totalPrice: number;
};

type AddOrderProductsType = {
  product: string;
  count: number;
};

export type AddOrderType = {
  user: string;
  products: AddOrderProductsType[];
  deliveryStatus: boolean;
};

export interface ShoppingCartItem {
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productQty: number;
  qty: number;
}

export interface PersonalInfo {
  userId: string | undefined;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number | string;
  address: string;
  date: string;
  orderNumber: string;
}

export interface ShippingInfo {
  shippingTitle: string;
  shippingDescription: string;
  priceSelected: number;
  selected: number;
}

export interface PaymentOptionsInfo {
  selected: number;
  paymentOptionTitle: string;
  paymentOptionDescription: string;
}

export interface CheckoutState {
  activeStep: number;
  setActiveStep: (step: number) => void;
  shoppingCartInfo: ShoppingCartItem[];
  setShoppingCartInfo: (info: ShoppingCartItem[]) => void;
  personalInfo: PersonalInfo;
  setPersonalInfo: (info: PersonalInfo) => void;
  shippingInfo: ShippingInfo;
  setShippingInfo: (info: ShippingInfo) => void;
  paymentOptionsInfo: PaymentOptionsInfo;
  setPaymentOptionsInfo: (info: PaymentOptionsInfo) => void;
  reset: () => void;
}
