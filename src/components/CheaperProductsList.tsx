import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { PRODUCTS } from "../mocks/products";
import ProductListItem from "./ProductListItem";

interface Props {
  productId: string;
}

const CheaperProductsList: React.FC<Props> = (props) => {
  const currentProduct = React.useMemo(() => {
    return PRODUCTS.find((product) => product.id === props.productId);
  }, []);

  const cheaperProducts = React.useMemo(() => {
    if (currentProduct) {
      return PRODUCTS.filter(
        (product) => product.price <= currentProduct?.price
      );
    }
  }, [currentProduct]);

  if (!cheaperProducts) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos a menor precio</Text>
      {cheaperProducts.map((product) => (
        <ProductListItem
          key={product.id}
          id={product.id}
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
