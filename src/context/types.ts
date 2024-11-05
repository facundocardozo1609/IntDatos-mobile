import { ReactNode } from "react";

export interface NameContextType {
  name: string;
  setName: (texto: string) => void;
}

export interface NameProviderProps {
  children: ReactNode;
}
