import * as React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ProductListItem from "./ProductListItem";
import SearchBar from "./SearchBar";
import { useGetProducts } from "../queries";

interface Props {
  onPressProduct: (id: string) => void;
}

const ProductsList: React.FC<Props> = ({ onPressProduct }) => {
  const [name, setName] = React.useState("leche");
  const productsQuery = useGetProducts(name);

  if (!productsQuery.data) {
    return null;
  }

  return (
    <FlatList
      data={productsQuery.data}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductListItem product={item} onPressProduct={onPressProduct} />
      )}
      ListHeaderComponent={<SearchBar onSearch={setName} />}
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
