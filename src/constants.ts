import { ImageSourcePropType } from "react-native";
import { SupermarketName } from "./models/supermarket";

export const SUPERMARKETS_LOGO: {
  [key in SupermarketName]: ImageSourcePropType;
} = {
  devoto: require("../assets/supermarkets/devoto.jpg"),
  disco: require("../assets/supermarkets/disco.png"),
  geant: require("../assets/supermarkets/geant.png"),
  tata: require("../assets/supermarkets/tata.png"),
};
