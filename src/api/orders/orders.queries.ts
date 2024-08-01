import { useQuery } from "@tanstack/react-query";
import { getAllOrdersApi } from "./orders.api";

export function useGetAllOrders(page: number, status: boolean | undefined) {
  return useQuery({
    queryKey: ["all-products", status, page],
    queryFn: () => getAllOrdersApi(page, status),
    refetchOnMount: "always",
  });
}
