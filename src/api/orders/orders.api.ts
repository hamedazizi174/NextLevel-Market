import { api } from "../config.api";

export async function getAllOrdersApi(
  page: number,
  status: boolean | undefined
) {
  const res = await api.get(`/orders`, {
    params: {
      page: page,
      deliveryStatus: status,
    },
  });
  return res.data;
}
