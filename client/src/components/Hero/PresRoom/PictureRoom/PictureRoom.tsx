import { useContext } from "react";
import CopieApiContext from "../../../Context/CopieApi";
import IndexRoomContext from "../../../Context/IndexRoom";
import Switch from "./Switch/Switch";

const PictureRoom = () => {
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
      <Switch direction="gauche" />
      <img src={`${copieApi[indexRoom].image_url}`} alt="Chambre" />
      <Switch direction="droite" />
    </div>
  );
};

export default PictureRoom;
