import * as React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { PRODUCTS } from "../mocks/products";
import ProductListItem from "./ProductListItem";
import SearchBar from "./SearchBar";

const ProductsList: React.FC = () => {
  const [products, setProducts] = React.useState(PRODUCTS);

  const onSearch = (text: string) => {
    if (!text) {
      setProducts(PRODUCTS);
      return;
    }
    setProducts(PRODUCTS.filter((product) => product.name.includes(text)));
  };

  return (
    <FlatList
      data={products}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => <ProductListItem id={item.id} />}
      ListHeaderComponent={<SearchBar onSearch={onSearch} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginTop: 10,
  },
  footer: {
    height: 50,
  },
  separator: {
    height: 0.5,
    backgroundColor: "#D3D3D3",
    marginVertical: 10,
  },
});

export default ProductsList;
