import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { AppStackParamList } from "../types";
import CheaperProductsList from "../../components/CheaperProductsList";
import { useGetProduct } from "../../queries";
import { SUPERMARKETS_LOGO } from "../../constants";

type Props = NativeStackScreenProps<AppStackParamList, "ProductDetails">;

const ProductDetails: React.FC<Props> = ({ route, navigation }) => {
  const productQuery = useGetProduct(route.params.id);

  const handleOnPressProduct = (id: string) => {
    navigation.push("ProductDetails", { id });
  };

  if (productQuery.isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  if (!productQuery.data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.detailsContainer}>
          <Image
            style={styles.productImage}
            source={{ uri: productQuery.data.imagenUrl }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{productQuery.data.nombre}</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Precio: </Text>
              <Text style={styles.price}>{`$${productQuery.data.precio}`}</Text>
              <Image
                source={SUPERMARKETS_LOGO[productQuery.data.nombreSuper]}
                style={styles.supermarketLogo}
              />
            </View>
          </View>
        </View>
        <CheaperProductsList
          productId={route.params.id}
          onPressProduct={handleOnPressProduct}
        />
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  detailsContainer: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "#D3D3D3",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  productImage: {
    height: 300,
    marginVertical: 20,
    maxWidth: "100%",
    resizeMode: "contain",
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
    marginLeft: 20,
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
});
