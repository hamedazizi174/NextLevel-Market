import { AddToCartType } from "@/types/types";
import { api } from "../config.api";

export async function getAllOrdersApi(
  page: number,
  status: boolean | undefined,
  sort: string
) {
  const res = await api.get(`/orders`, {
    params: {
      page,
      deliveryStatus: status,
      sort,
    },
  });
  return res.data;
}

export async function postToCartApi(product: AddToCartType) {
  const res = await api.post("/orders", product);
  return res.data;
}

export const deleteCartApi = async (id: string) => {
  const response = await api.delete(`/orders/${id}`);
  return response.data;
};

export const updateCartApi = async (productInCart: any) => {
  const response = await api.put(`/cart/${productInCart.id}`, productInCart);
  return response.data;
};
