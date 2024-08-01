import { api } from "../config.api";

export async function getAllProductsApi(page: number) {
  const res = await api.get(`/products?page=${page}`);
  return res.data;
}
