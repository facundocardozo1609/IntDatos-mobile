import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

interface Props {
  message: string;
}

const EmptyStateMessage: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
      <Image
        source={require("../../assets/search-empty.jpg")}
        style={{ height: 60, width: 60 }}
      />
    </View>
  );
};

export default EmptyStateMessage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
