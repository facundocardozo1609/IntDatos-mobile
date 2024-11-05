import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import ProductListItem from "./ProductListItem";
import { useGetProduct, useGetProducts } from "../queries";

interface Props {
  productId: string;
}

const CheaperProductsList: React.FC<Props> = (props) => {
  const productQuery = useGetProduct(props.productId);
  const productsQuery = useGetProducts("leche");

  const cheaperProducts = React.useMemo(() => {
    if (productsQuery.data && productQuery.data) {
      return productsQuery.data.filter(
        (product) =>
          product.precio <= productQuery.data.precio &&
          product.id !== productQuery.data.id
      );
    }
  }, [productQuery.data]);

  if (!cheaperProducts) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos a menor precio</Text>
      {cheaperProducts.map((product) => (
        <ProductListItem
          key={product.id}
          product={product}
          onPressProduct={() => {}}
        />
      ))}
    </View>
  );
};

export default CheaperProductsList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
