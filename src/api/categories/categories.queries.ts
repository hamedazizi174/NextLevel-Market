import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi, getCategoryByNameApi } from "./categories.api";

export function useGetCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategoriesApi(),
  });
}

export function useGetCategoryByName(categoryName: string) {
  return useQuery({
    queryKey: ["category", categoryName],
    queryFn: () => getCategoryByNameApi(categoryName),
  });
}
