import { AddOrderType } from "@/types/types";
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

export async function addCartToOrdersApi(order: AddOrderType) {
  const res = await api.post("/orders", order);
  return res.data;
}

export async function changeOrderStatusApi(orderId: string) {
  const res = await api.patch(`/orders/${orderId}`, { deliveryStatus: true });
  return res.data;
}
