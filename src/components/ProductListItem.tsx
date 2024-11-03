import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { PRODUCTS } from "../mocks/products";

interface Props {
  id: string;
}

const ProductListItem: React.FC<Props> = (props) => {
  const product = PRODUCTS.find((product) => product.id === props.id);

  if (!product) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={product?.image}
        style={{ height: 50, width: 50, backgroundColor: "red" }}
      />
      <View>
        <Text>{product?.name}</Text>
        <Text>{product?.price}</Text>
      </View>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {},
});
