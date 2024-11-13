import { createContext } from "react";

type ApiContextType = {
  api: unknown;
};

const ApiContext = createContext<ApiContextType | null>(null);

export default ApiContext;
