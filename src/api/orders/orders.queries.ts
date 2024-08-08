import { useQuery } from "@tanstack/react-query";
import { getAllOrdersApi } from "./orders.api";

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
