import { useQuery } from "@tanstack/react-query";
import { getSubcategoriesApi } from "./subcategories.api";

export function useGetSubcategories(categoryId: string) {
  return useQuery({
    queryKey: ["subcategories", categoryId],
    queryFn: () => getSubcategoriesApi(categoryId),
    enabled: !!categoryId,
  });
}
