import {
  type ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useContext } from "react";
import CopieApiContext from "./CopieApi";

// Définir le type de la chambre
type Chambre = {
  id: number;
  nom: string;
  description: string;
  emplacement: string;
  capacite: number;
  prix_par_nuit: number;
  equipements: string[];
  image_url: string;
};

// Définir le type pour le contexte
type ApiContextType = {
  api: Chambre[];
  setApi: React.Dispatch<React.SetStateAction<Chambre[]>>; // Ajout de setApi ici
};

const ApiContext = createContext<ApiContextType | null>(null);

interface IndexRoomProviderProps {
  children: ReactNode; // Déclare que children est un ReactNode
}

export const ApiProvider: React.FC<IndexRoomProviderProps> = ({ children }) => {
  // État de l'API avec une valeur initiale
  const premierChambre: Chambre[] = [
    {
      id: 0,
      nom: "",
      description: "",
      emplacement: "",
      capacite: 0,
      prix_par_nuit: 0,
      equipements: [],
      image_url: "",
    },
  ];

  // Déclaration de l'état api
  const [api, setApi] = useState<Chambre[]>(premierChambre);

  //récupéré copie API
  const context = useContext(CopieApiContext);
  // Vérification que le contexte n'est pas null
  if (!context) {
    throw new Error("IndexRoomContext non valide");
  }
  const { setCopieApi } = context;

  //fonction set api du useffect
  const apiRecuperer = useCallback(
    (data: Chambre[]) => {
      setApi(data);
      setCopieApi(data);
    },
    [setCopieApi],
  );

  // Récupération des données depuis l'API
  useEffect(() => {
    fetch("https://api-strasgite.vercel.app/items", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => apiRecuperer(data)) // Mise à jour de l'état api
      .catch((error) => console.error(error));
  }, [apiRecuperer]);

  return (
    <ApiContext.Provider value={{ api, setApi }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
