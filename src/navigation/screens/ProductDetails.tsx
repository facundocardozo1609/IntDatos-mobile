import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { AppStackParamList } from "../types";
import { PRODUCTS } from "../../mocks/products";

type Props = NativeStackScreenProps<AppStackParamList, "ProductDetails">;

const ProductDetails: React.FC<Props> = ({ route }) => {
  const product = PRODUCTS.find((product) => product.id === route.params.id);

  if (!product) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={{ flex: 0.5, width: "100%" }} source={product.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product?.name}</Text>
        <Text style={styles.price}>{`$${product?.price}`}</Text>
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
  price: {
    fontSize: 30,
  },
  textContainer: {},
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
