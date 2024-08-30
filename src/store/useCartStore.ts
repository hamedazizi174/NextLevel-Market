import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartType, UserType } from "../types/types";

type CartStoreType = {
  cart: CartType[];
  addToCart: (product: CartType) => void;
  updateCount: (product: CartType) => void;
  removeFromCart: (product: CartType) => void;
  clearCart: (user: UserType) => void;
};

export const useCartStore = create<CartStoreType>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const cart = get().cart;
        const cartIsExist = cart.findIndex(
          (item) => item.userId === product.userId
        );
        if (cartIsExist !== -1) {
          const productIsExist = cart[cartIsExist].products.findIndex(
            (item) => item.productId === product.products[0].productId
          );
          console.log("1");
          if (productIsExist !== -1) {
            cart[cartIsExist].totalPrice -=
              cart[cartIsExist].products[productIsExist].count *
              cart[cartIsExist].products[productIsExist].price;
            cart[cartIsExist].products[productIsExist].count =
              product.products[0].count;
            cart[cartIsExist].totalPrice += product.totalPrice;
            set((state) => ({ cart: [...state.cart] }));
            console.log("2");
          } else {
            cart[cartIsExist].products = [
              ...cart[cartIsExist].products,
              product.products[0],
            ];
            cart[cartIsExist].totalPrice += product.totalPrice;
            set((state) => ({ cart: [...state.cart] }));
            console.log("3");
          }
        } else {
          set((state) => ({ cart: [...state.cart, product] }));
          console.log("4");
        }
      },
      updateCount: (product) => {
        const cart = get().cart;
        const userCartIndex = cart.findIndex(
          (item) => item.userId === product.userId
        );
        const productIndex = cart[userCartIndex].products.findIndex(
          (item) => item.productId === product.products[0].productId
        );
        // cart[userCartIndex].totalPrice -=
        //   cart[userCartIndex].products[productIndex].count *
        //   cart[userCartIndex].products[productIndex].price;
        cart[userCartIndex].products[productIndex].count =
          product.products[0].count;
        // cart[userCartIndex].totalPrice += product.totalPrice;
        set((state) => ({ cart: [...state.cart] }));
      },
      removeFromCart: (product) => {
        const cart = get().cart;
        const userCartIndex = cart.findIndex(
          (item) => item.userId === product.userId
        );
        cart[userCartIndex].products = cart[userCartIndex].products.filter(
          (item) => item.productId !== product.products[0].productId
        );
        cart[userCartIndex].totalPrice -=
          product.products[0].count * product.products[0].price;
        set((state) => ({ cart: [...state.cart] }));
      },
      clearCart: (user) => {
        const cart = get().cart;
        const userCartIndex = cart.findIndex(
          (item) => item.userId === user._id
        );
        cart[userCartIndex].products = [];
      },
    }),
    { name: "myCart" }
  )
);
