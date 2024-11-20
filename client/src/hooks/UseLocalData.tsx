// Définition des types pour les données
type Reservation = {
  id: number;
  nom: string;
  description: string;
  emplacement: string;
  capacite: number;
  prix_par_nuit: number;
  equipements: string[];
  image_url: string;
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
  reservation: Reservation[];
};

// Définition d'un type pour les données stockées dans LocalData
type LocalDataType = UserData[];

// Interface pour LocalData
interface ILocalData {
  copy: () => LocalDataType | null;
  push: (donner: LocalDataType) => void;
  set: (forcer?: boolean) => void;
}

// Implémentation de l'objet LocalData
export const LocalData: ILocalData = {
  copy: () => copyLocalData(),
  push: (donner: LocalDataType) => {
    setLocalData(donner);
  },
  set: (forcer = false) => {
    const donnerActuel = copyLocalData();
    // Vérifier que les données ne sont pas nulles et qu'on ne force pas le set
    if (donnerActuel === null || forcer) {
      // Set les données de base
      setLocalData(creeData());
    }
  },
};

// Fonction pour copier les données actuelles depuis localStorage
function copyLocalData(): LocalDataType | null {
  // Charger les données actuelles
  const donnerActuel = localStorage.getItem("LocalData");
  // Caster pour avoir un tableau de UserData ou null
  return donnerActuel ? (JSON.parse(donnerActuel) as LocalDataType) : null;
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
      reservation: [
        {
          id: 1,
          nom: "La Suite Alsacienne",
          description:
            "Une chambre au style traditionnel alsacien, avec poutres apparentes et mobilier en bois sculpté.",
          emplacement: "Strasbourg, France",
          capacite: 2,
          prix_par_nuit: 150,
          equipements: [
            "Wi-Fi",
            "Salle de bain privée",
            "Petit-déjeuner inclus",
            "Vue sur la ville",
          ],
          image_url:
            "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg",
        },
      ],
    },
  ];
}
