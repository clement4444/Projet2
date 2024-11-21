// Définition des types pour les données
type Reservation = {
  id: number;
  dateDebut?: string;
  dateFin?: string;
};

type UserData = {
  mail: string;
  password: string;
  sex: string;
  prenom: string;
  nom: string;
  telephone: string;
  codePostal: number | null;
  ville: string;
  idChambreSelect: number;
  reservation: Reservation[];
};

// Définition d'un type pour les données stockées dans LocalData
type LocalDataType = UserData[];

// Interface pour LocalData
interface ILocalData {
  set: (forcer?: boolean) => void;
}

// Implémentation de l'objet LocalData
export const LocalData: ILocalData = {
  set: (forcer = false) => {
    const donnerActuel = copyLocalData();
    // Vérifier que les données ne sont pas nulles et qu'on ne force pas le set
    if (donnerActuel === null || forcer) {
      // Set les données de base
      return setLocalData(creeData());
    }
  },
};

// Fonction pour copier les données actuelles depuis localStorage
function copyLocalData(): LocalDataType | null {
  // Charger les données actuelles
  const donnerActuel = localStorage.getItem("LocalData");
  // Caster pour avoir un tableau de UserData ou null
  return donnerActuel ? JSON.parse(donnerActuel) : null;
}

// Fonction pour définir les données dans localStorage
function setLocalData(donner: LocalDataType): void {
  localStorage.setItem("LocalData", JSON.stringify(donner));
}

// Fonction pour créer les données par défaut
function creeData(): LocalDataType {
  return [
    {
      mail: "",
      password: "",
      sex: "",
      prenom: "",
      nom: "",
      telephone: "",
      codePostal: null,
      ville: "",
      idChambreSelect: 0,
      reservation: [
        {
          id: 1,
        }
      ],
    },
  ];
}
