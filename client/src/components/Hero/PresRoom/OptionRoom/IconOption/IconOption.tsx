import { useContext } from "react";
import CopieApiContext from "../../../../Context/CopieApi";
import IndexRoomContext from "../../../../Context/IndexRoom";

const IconOption = ({ numeros }: { numeros: number }) => {
  //récupéré index
  const contextIndex = useContext(IndexRoomContext);
  if (!contextIndex) {
    throw new Error("IndexRoomContext non valide");
  }
  const { indexRoom } = contextIndex;

  //récupéré copie API
  const contextCopieApi = useContext(CopieApiContext);
  if (!contextCopieApi) {
    throw new Error("IndexRoomContext non valide");
  }
  const { copieApi } = contextCopieApi;

  //afficher le composant que si il a le nombre élément
  if (copieApi[indexRoom].equipements.length >= numeros + 1) {
    return (
      <>
        <p>🐦‍🔥{copieApi[indexRoom].equipements[numeros]}</p>
      </>
    );
  }
};

export default IconOption;
