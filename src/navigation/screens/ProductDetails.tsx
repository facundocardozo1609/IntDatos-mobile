import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { AppStackParamList } from "../types";
import { PRODUCTS } from "../../mocks/products";
import { SUPERMARKETS } from "../../mocks/supermarkets";

type Props = NativeStackScreenProps<AppStackParamList, "ProductDetails">;

const ProductDetails: React.FC<Props> = ({ route }) => {
  const product = PRODUCTS.find((product) => product.id === route.params.id);
  const supermaket = SUPERMARKETS.find(
    (supermarket) => supermarket.id === product?.supermarket
  );

  if (!product) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={product.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product?.name}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Precio: </Text>
          <Text style={styles.price}>{`$${product?.price}`}</Text>
          <Image source={supermaket?.logo} style={styles.supermarketLogo} />
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  productImage: {
    height: "50%",
    marginVertical: 20,
    width: "100%",
  },
  price: {
    fontSize: 25,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  label: {
    fontSize: 20,
    fontStyle: "italic",
    color: "gray",
  },
  supermarketLogo: {
    height: 80,
    maxWidth: 100,
    resizeMode: "contain",
  },
});
