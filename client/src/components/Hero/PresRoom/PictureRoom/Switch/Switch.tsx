import { useContext } from "react";
import CopieApiContext from "../../../../Context/CopieApi";
import IndexRoomContext from "../../../../Context/IndexRoom";

const Switch = ({ direction }: { direction: string }) => {
  // Vérification que le contexte n'est pas null
  const contextIndex = useContext(IndexRoomContext);
  if (!contextIndex) {
    // Retourner un message d'erreur ou gérer l'absence de contexte
    throw new Error("IndexRoomContext non valide");
  }
  const { indexRoom, setIndexRoom } = contextIndex;

  //récupéré copie API
  const contextCopieApi = useContext(CopieApiContext);
  if (!contextCopieApi) {
    throw new Error("IndexRoomContext non valide");
  }
  const { copieApi } = contextCopieApi;

  let classElement = "";
  let valeurElement = "";
  let incementation = 0;

  if (direction === "gauche") {
    classElement = "flecheGauche";
    valeurElement = "⬅️";
    incementation = -1;
  } else if (direction === "droite") {
    classElement = "flecheGauche";
    valeurElement = "➡️";
    incementation = 1;
  }

  //function de rapelle
  const handleClick = () => {
    setIndexRoom(indexRoom + incementation);
  };

  //prédit le prochain index
  const indexRoomSuivant = indexRoom + incementation;
  //verifie que le prochain index est pas plus grand que le nb de chambre
  const isPossible =
    indexRoomSuivant >= 0 && indexRoomSuivant <= copieApi.length - 1;

  return (
    <>
      {isPossible && (
        <button
          className={`${classElement}`}
          onClick={handleClick}
          type="button"
        >
          {valeurElement}
        </button>
      )}
    </>
  );
};

export default Switch;
