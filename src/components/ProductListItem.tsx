import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { PRODUCTS } from "../mocks/products";
import { SUPERMARKETS } from "../mocks/supermarkets";

interface Props {
  id: string;
  onPressProduct: (id: string) => void;
}

const ProductListItem: React.FC<Props> = ({ id, onPressProduct }) => {
  const product = PRODUCTS.find((product) => product.id === id);
  const supermaket = SUPERMARKETS.find(
    (supermarket) => supermarket.id === product?.supermarket
  );

  if (!product) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressProduct(product.id)}
    >
      <Image source={product?.image} style={{ height: "100%", width: 100 }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product?.name}</Text>
        <Text style={styles.price}>{`$${product?.price}`}</Text>
        <Image
          source={supermaket?.logo}
          style={{ height: 50, width: 50, resizeMode: "contain" }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  logoContainer: {
    flexDirection: "row",
  },
  price: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
