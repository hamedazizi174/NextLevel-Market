import { api } from "../config.api";

export async function getSubcategoriesApi(categoryId: string) {
  const res = await api.get(`/subcategories?category=${categoryId}`);
  return res.data;
}
