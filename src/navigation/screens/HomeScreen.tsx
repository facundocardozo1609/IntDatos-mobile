import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import ProductsList from "../../components/ProductsList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types";

type Props = NativeStackScreenProps<AppStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const onPressProduct = (id: string) => {
    navigation.navigate("ProductDetails", { id });
  };

  return (
    <View style={styles.container}>
      <ProductsList onPressProduct={onPressProduct} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
