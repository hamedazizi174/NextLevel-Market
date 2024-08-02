import { api } from "../config.api";

export async function getAllProductsApi(page: number) {
  const res = await api.get(`/products?page=${page}`);
  return res.data;
}

export async function getProductsByCategoryIdApi(categoryId: string) {
  const res = await api.get(`/products?category=${categoryId}`);
  return res.data;
}

export async function getProductByIdApi(productId: string) {
  const res = await api.get(`/products?_id=${productId}`);
  return res.data;
}

export async function getProductsByPriceApi(
  categoryId: string,
  min: number,
  max: number
) {
  const res = await api.get(
    `/products?category=${categoryId}&price[gte]=${min}&price[lte]=${max}`
  );
  return res.data;
}
