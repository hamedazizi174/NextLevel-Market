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
