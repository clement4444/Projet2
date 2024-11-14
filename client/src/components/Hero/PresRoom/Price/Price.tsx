import { useContext } from "react";
import CopieApiContext from "../../../Context/CopieApi";
import IndexRoomContext from "../../../Context/IndexRoom";

const Price = () => {
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

  return (
    <div>
      <p>{copieApi[indexRoom].prix_par_nuit}€</p>
      <p>par nuit</p>
    </div>
  );
};

export default Price;
