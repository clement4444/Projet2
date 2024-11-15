import { UseCopieApiContext } from "../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../hooks/UseIndexRoom";
import Switch from "./Switch/Switch";

const PictureRoom = () => {
  //récupé le contexte index
  const { indexRoom } = UseIndexRoomContext();
  //récupé le contexte api
  const { copieApi } = UseCopieApiContext();

  return (
    <div className="room">
      <Switch direction="gauche" />
      <img src={`${copieApi[indexRoom].image_url}`} alt="Chambre" />
      <Switch direction="droite" />
    </div>
  );
};

export default PictureRoom;
