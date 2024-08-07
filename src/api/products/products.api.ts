import { EditProductType } from "@/types/types";
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

export async function postProductApi(product: FormData) {
  const res = await api.post(`/products`, product);
  return res.data;
}

export async function deleteProductApi(id: string) {
  const res = await api.delete(`/products/${id}`);
  return res.data;
}

export async function editProductApi({ product, productId }: EditProductType) {
  const res = await api.patch(`/products/${productId}`, product);
  return res.data;
}
