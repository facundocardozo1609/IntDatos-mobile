import { useQuery } from "@tanstack/react-query";
import { getProductById, getProducts } from "./api/endpoints";
import { uniqBy } from "lodash";

export const useGetProducts = (name: string) => {
  return useQuery({
    enabled: !!name,
    queryKey: ["products", name],
    queryFn: async ({ queryKey }) => {
      const { productos } = await getProducts(queryKey[1]);
      return productos;
    },
  });
};

export const useGetProduct = (id: string) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["products", id],
    queryFn: async ({ queryKey }) => {
      const { producto } = await getProductById(queryKey[1]);
      return producto;
    },
  });
};
