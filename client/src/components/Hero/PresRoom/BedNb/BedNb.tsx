import { useContext } from "react";
import CopieApiContext from "../../../Context/CopieApi";
import IndexRoomContext from "../../../Context/IndexRoom";

const BedNb = () => {
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
    <div className="room">
     <p>1 chambre • {copieApi[indexRoom].capacite} personnes</p>
    </div>
  );
};

export default BedNb;
