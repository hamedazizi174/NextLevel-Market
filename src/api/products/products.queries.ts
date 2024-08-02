import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getAllProductsApi } from "./products.api";

export function useGetAllProducts(page: number) {
  return useQuery({
    queryKey: ["all-products", page],
    queryFn: () => getAllProductsApi(page),
    refetchOnMount: "always",
  });
}

export function useDeleteProduct(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteProduct(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["all-products"],
      });
    },
  });
}
