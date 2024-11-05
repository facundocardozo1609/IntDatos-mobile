import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import ProductListItem from "./ProductListItem";
import { useGetProduct, useGetProducts } from "../queries";
import { useName } from "../context/useName";

interface Props {
  productId: string;
  onPressProduct: (id: string) => void;
}

const CheaperProductsList: React.FC<Props> = (props) => {
  const { name } = useName();
  const productQuery = useGetProduct(props.productId);
  const productsQuery = useGetProducts(name);

  const cheaperProducts = React.useMemo(() => {
    if (productsQuery.data && productQuery.data) {
      return productsQuery.data.filter((product) => {
        const parsedProductPrice = Number(product.precio.replace(",", "."));
        const parsedCurrentPrice = Number(
          productQuery.data.precio.replace(",", ".")
        );
        return (
          parsedProductPrice < parsedCurrentPrice &&
          product.id !== productQuery.data.id
        );
      });
    }
  }, [productQuery.data]);

  if (!cheaperProducts || cheaperProducts.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos a menor precio</Text>
      {cheaperProducts.map((product) => (
        <ProductListItem
          key={product.id}
          product={product}
          onPressProduct={() => props.onPressProduct(product.id)}
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
