import { useQuery } from "@tanstack/react-query";
import { getAllProductsApi } from "./products.api";

export function useGetAllProducts(page: number) {
  return useQuery({
    queryKey: ["all-products", page],
    queryFn: () => getAllProductsApi(page),
    refetchOnMount: "always",
  });
}
