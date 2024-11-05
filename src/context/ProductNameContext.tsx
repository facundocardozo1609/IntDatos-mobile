import React, { createContext, useContext, useState, ReactNode } from "react";
import { NameContextType, NameProviderProps } from "./types";

export const NameContext = createContext<NameContextType | undefined>(
  undefined
);

export const NameProvider: React.FC<NameProviderProps> = ({ children }) => {
  const [name, setName] = useState<string>("");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
