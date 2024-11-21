import { createContext, useState } from "react";
import { LocalData } from "../hooks/UseLocalData";

interface BakOfficeContextType {
  bakOffice: string | null;
  setBakOffice: React.Dispatch<React.SetStateAction<string | null>>;
}

// Création d'un nouveau contexte
const BakOfficeContext = createContext<BakOfficeContextType | null>(null);

import type { ReactNode } from "react";

const BakOfficeProvider = ({ children }: { children: ReactNode }) => {
  //set le local stockage
  LocalData.set();
  const [bakOffice, setBakOffice] = useState(localStorage.getItem("LocalData"));

  return (
    <BakOfficeContext.Provider value={{ bakOffice, setBakOffice }}>
      {children}
    </BakOfficeContext.Provider>
  );
};

export { BakOfficeContext, BakOfficeProvider };
