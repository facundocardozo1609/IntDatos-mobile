import * as React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { PRODUCTS } from "../mocks/products";
import ProductListItem from "./ProductListItem";

const ProductsList: React.FC = () => {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={PRODUCTS}
      renderItem={({ item }) => <ProductListItem id={item.id} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  separator: {
    height: 10,
  },
});

export default ProductsList;
