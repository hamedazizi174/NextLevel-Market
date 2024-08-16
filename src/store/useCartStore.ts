import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartType } from "../types/types";

type CartStoreType = {
  cart: CartType[];
  addToCart: (product: CartType) => void;
  updateCount: (product: CartType) => void;
  removeFromCart: (product: CartType) => void;
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
        //   const cartItem = cart.find(
        //     (item) => item.products._id === product.product._id
        //   );
        //   if (cartItem) {
        //     const updatedCart = cart.map((item) =>
        //       item.product._id === product.product._id
        //         ? { ...item, count: (item.count as number) + product.count }
        //         : item
        //     );
        //     set((state) => ({
        //       cart: updatedCart,
        //       totalCount: state.totalCount + product.count,
        //       totalPrice:
        //         state.totalPrice + product.product.price * product.count,
        //     }));
        //   } else {
        //     const updatedCart = [...cart, { ...product }];

        //     set((state) => ({
        //       cart: updatedCart,
        //       totalCount: state.totalCount + product.count,
        //       totalPrice:
        //         state.totalPrice + product.product.price * product.count,
        //     }));
        //   }
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

        //   const cartItem = cart.find(
        //     (item) => item.product._id === product.product._id
        //   );
        //   const oldCount = cartItem?.count;
        //   const updatedCart = cart.map((item) =>
        //     item.product._id === product.product._id
        //       ? { ...item, count: product.count }
        //       : item
        //   );
        //   set((state) => ({
        //     cart: updatedCart,
        //     totalCount: state.totalCount - (oldCount || 0) + product.count,
        //     totalPrice:
        //       state.totalPrice +
        //       product.product.price * (product.count - (oldCount || 0)),
        //   }));
        //   console.log(get());
        //   console.log("get()^");
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
    }),
    { name: "myCart" }
  )
);
