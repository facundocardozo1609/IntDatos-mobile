import { Product } from "../models/products";
import axiosInstance from "./axiosInstance";

export const getProducts = async (
  name: string
): Promise<{ productos: Product[] }> => {
  const { data } = await axiosInstance.get(`?name=${name}`);
  return data;
};

export const getProductById = async (
  id: string
): Promise<{ producto: Product }> => {
  const { data } = await axiosInstance.get(`/${id}`);
  return data;
};
