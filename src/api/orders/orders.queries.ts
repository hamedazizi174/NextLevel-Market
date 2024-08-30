import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addCartToOrdersApi,
  changeOrderStatusApi,
  getAllOrdersApi,
} from "./orders.api";
import { AddOrderType } from "@/types/types";

export function useGetAllOrders(
  page: number,
  status: boolean | undefined,
  sort: string
) {
  return useQuery({
    queryKey: ["orders", status, sort, page],
    queryFn: () => getAllOrdersApi(page, status, sort),
    refetchOnMount: "always",
  });
}

export function useAddCartToOrders() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (order: AddOrderType) => addCartToOrdersApi(order),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });
}

export function useChangeOrderStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (orderId: string) => changeOrderStatusApi(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });
}
