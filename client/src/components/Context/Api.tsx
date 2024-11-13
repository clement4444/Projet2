import { createContext } from "react";

//verifi api
type ApiContextType = {
  api: unknown;
};

const ApiContext = createContext<ApiContextType | null>(null);

export default ApiContext;
