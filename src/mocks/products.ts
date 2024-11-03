import { Product } from "../models/products";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Leche Vegetal Silk Soja 946Ml",
    price: 169,
    image: require("../../assets/jpg/leche.jpg"),
    supermarkets: ["1"],
  },
  {
    id: "2",
    name: "Pan Lacteado Bimbo 570 G",
    price: 145,
    image: require("../../assets/jpg/pan.jpg"),
    supermarkets: ["1"],
  },
  {
    id: "3",
    name: "Coca Cola Sin Azúcar Retornable 2 L - Incluye Envase",
    price: 155,
    image: require("../../assets/jpg/coca.jpg"),
    supermarkets: ["2"],
  },
  {
    id: "4",
    name: "Dulce De Leche Los Nietitos Light 400 G",
    price: 155,
    image: require("../../assets/jpg/ddl.jpg"),
    supermarkets: ["2"],
  },
  {
    id: "5",
    name: "Harina De Trigo 0000 Adria 1 Kg",
    price: 69,
    image: require("../../assets/jpg/harina.jpg"),
    supermarkets: ["1"],
  },
];
