import * as React from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
  onSearch: (name: string) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const [name, setName] = React.useState<string>();
  return (
    <TextInput
      style={styles.container}
      value={name}
      placeholder="Nombre del producto"
      enterKeyHint="search"
      onChangeText={setName}
      onSubmitEditing={(e) => props.onSearch(e.nativeEvent.text)}
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
