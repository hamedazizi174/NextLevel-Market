import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteCartApi,
  getAllOrdersApi,
  postToCartApi,
  updateCartApi,
} from "./orders.api";
import { AddToCartType } from "@/types/types";

export function useGetAllOrders(
  page: number,
  status: boolean | undefined,
  sort: string
) {
  return useQuery({
    queryKey: ["all-products", status, sort, page],
    queryFn: () => getAllOrdersApi(page, status, sort),
    refetchOnMount: "always",
  });
}

export const usePostToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (product: AddToCartType) => postToCartApi(product),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
};

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteCartApi(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProductInCart: any) => updateCartApi(newProductInCart),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
};
