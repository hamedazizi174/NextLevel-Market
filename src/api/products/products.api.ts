import { api } from "../config.api";

export async function getAllProductsApi(page: number) {
  const res = await api.get(`/products?page=${page}`);
  return res.data;
}

export async function deleteProduct(id: string) {
  const res = await api.delete(`/products/${id}`);
  return res.data;
}
