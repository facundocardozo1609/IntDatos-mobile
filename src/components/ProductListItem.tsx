import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Product } from "../models/products";
import { SUPERMARKETS_LOGO } from "../constants";

interface Props {
  product: Product;
  onPressProduct: (id: string) => void;
}

const ProductListItem: React.FC<Props> = ({ product, onPressProduct }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressProduct(product.id)}
    >
      <Image source={{ uri: product?.imagenUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.nombre}</Text>
        <Text style={styles.price}>{`$${product.precio}`}</Text>
        <Image
          source={SUPERMARKETS_LOGO[product.nombreSuper]}
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
    alignItems: "center",
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
  image: {
    height: "100%",
    width: 80,
    resizeMode: "contain",
  },
});
