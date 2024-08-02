import { useQuery } from "@tanstack/react-query";
import {
  getAllProductsApi,
  getProductByIdApi,
  getProductsByCategoryIdApi,
  getProductsByPriceApi,
} from "./products.api";

export function useGetAllProducts(page: number) {
  return useQuery({
    queryKey: ["all-products", page],
    queryFn: () => getAllProductsApi(page),
    refetchOnMount: "always",
  });
}

export const useGetProductsByCategoryId = (categoryId: string) => {
  return useQuery({
    queryKey: ["products", "category", categoryId],
    queryFn: () => getProductsByCategoryIdApi(categoryId),
  });
};

export const useGetProductById = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductByIdApi(productId),
  });
};

export const useGetProductsByPrice = (
  categoryId: string,
  min: number,
  max: number
) => {
  return useQuery({
    queryKey: ["products", categoryId, min, max],
    queryFn: () => getProductsByPriceApi(categoryId, min, max),
    enabled: !!min && !!max && !!categoryId,
    refetchOnMount: "always",
  });
};
