import { ImageSourcePropType } from "react-native";
import { SupermarketName } from "./supermarket";

export type Product = {
  id: string;
  nombre: string;
  fecha: string;
  precio: string;
  imagenUrl: string;
  nombreSuper: SupermarketName;
};
