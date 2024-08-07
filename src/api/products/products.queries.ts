import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteProductApi,
  editProductApi,
  getAllProductsApi,
  getProductByIdApi,
  getProductsByCategoryIdApi,
  getProductsByPriceApi,
  postProductApi,
} from "./products.api";
import { EditProductType } from "@/types/types";

export function useGetAllProducts(page: number) {
  return useQuery({
    queryKey: ["all-products", page],
    queryFn: () => getAllProductsApi(page),
    refetchOnMount: "always",
  });
}

export function useGetProductsByCategoryId(categoryId: string) {
  return useQuery({
    queryKey: ["products", "category", categoryId],
    queryFn: () => getProductsByCategoryIdApi(categoryId),
  });
}

export function useGetProductById(productId: string) {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductByIdApi(productId),
  });
}

export function useGetProductsByPrice(
  categoryId: string,
  min: number,
  max: number
) {
  return useQuery({
    queryKey: ["products", categoryId, min, max],
    queryFn: () => getProductsByPriceApi(categoryId, min, max),
    enabled: !!min && !!max && !!categoryId,
    refetchOnMount: "always",
  });
}

export function usePostProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (product: FormData) => postProductApi(product),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["all-products"],
      });
    },
  });
}

export function useDeleteProduct(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteProductApi(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["all-products"],
      });
    },
  });
}

export function useEditProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ product, productId }: EditProductType) =>
      editProductApi({ product, productId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all-products"],
      });
      queryClient.invalidateQueries({
        queryKey: ["products", "category"],
      });
      queryClient.invalidateQueries({
        queryKey: ["product"],
      });
    },
  });
}
