import { api } from "../config.api";

export async function getCategoriesApi() {
  const res = await api.get("/categories");
  return res.data;
}

export async function getCategoryByNameApi(categoryName: string) {
  const res = await api.get(`/categories?name=${categoryName}`);
  return res.data;
}
