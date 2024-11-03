import * as React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const SearchBar: React.FC = () => {
  const [name, setName] = React.useState<string>();
  return (
    <TextInput
      style={styles.container}
      value={name}
      placeholder="Nombre del producto"
      enterKeyHint="search"
      onChangeText={setName}
      onKeyPress={(e) => console.log(e.nativeEvent.key)}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    height: 45,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#D3D3D3",
  },
});
