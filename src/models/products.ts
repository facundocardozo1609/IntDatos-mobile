import { ImageSourcePropType } from "react-native";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  supermarket: string;
};
