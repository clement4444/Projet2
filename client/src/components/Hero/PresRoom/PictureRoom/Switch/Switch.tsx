import { useContext } from "react";
import IndexRoomContext from "../../../../Context/IndexRoom";

const Switch = ({ direction }: { direction: string }) => {
  // Vérification que le contexte n'est pas null
  const context = useContext(IndexRoomContext);

  if (!context) {
    // Retourner un message d'erreur ou gérer l'absence de contexte
    throw new Error("IndexRoomContext non valide");
  }

  const { indexRoom, setIndexRoom } = context;

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

  return (
    <>
      <button className={`${classElement}`} onClick={handleClick} type="button">
        {valeurElement}
      </button>
    </>
  );
};

export default Switch;
