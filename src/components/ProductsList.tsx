import * as React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import ProductListItem from "./ProductListItem";
import SearchBar from "./SearchBar";
import { useGetProducts } from "../queries";
import { useName } from "../context/useName";

interface Props {
  onPressProduct: (id: string) => void;
}

const ProductsList: React.FC<Props> = ({ onPressProduct }) => {
  const { name, setName } = useName();
  const productsQuery = useGetProducts(name);

  if (productsQuery.isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  if (!productsQuery.data) {
    return (
      <View style={styles.container}>
        <SearchBar onSearch={setName} />
        <View style={styles.messageContainer}>
          <Text>Ingrese el nombre de un producto</Text>
        </View>
      </View>
    );
  }

  if (productsQuery.data.length === 0) {
    return (
      <View style={styles.container}>
        <SearchBar onSearch={setName} />
        <View style={styles.messageContainer}>
          <Text>No se encontraron productos</Text>
        </View>
      </View>
    );
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
    paddingTop: 20,
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
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messageContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductsList;
