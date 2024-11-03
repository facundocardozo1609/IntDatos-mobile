import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { PRODUCTS } from "../mocks/products";
import ProductListItem from "./ProductListItem";

const ProductsList: React.FC = () => {
  return (
    <FlatList
      data={PRODUCTS}
      renderItem={({ item }) => <ProductListItem id={item.id} />}
    />
  );
};

export default ProductsList;
