import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import ProductsList from "../../components/ProductsList";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ProductsList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
