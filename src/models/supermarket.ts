import { ImageSourcePropType } from "react-native";

export type SupermarketName = "devoto" | "geant" | "disco" | "tata";

export type Supermarket = {
  id: string;
  name: string;
  logo: ImageSourcePropType;
};
