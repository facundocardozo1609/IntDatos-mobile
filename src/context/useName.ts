import { useContext } from "react";
import { NameContextType } from "./types";
import { NameContext } from "./ProductNameContext";

export const useName = (): NameContextType => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error("useName debe ser usado dentro de un NameProvider");
  }
  return context;
};
