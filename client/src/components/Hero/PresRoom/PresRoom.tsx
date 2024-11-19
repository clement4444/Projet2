import "./PresRoom.css";

import { UseCopieApiContext } from "../../../hooks/UseCopieApi";
import BedNb from "./BedNb/BedNb";
import Descri from "./Descri/Descri";
import LikeButton from "./LikeButton/LikeButton";
import NameRoom from "./NameRoom/NameRoom";
import NotFind from "./NotFind/NotFind";
import Notation from "./Notation/Notation";
import OptionRoom from "./OptionRoom/OptionRoom";
import PictureRoom from "./PictureRoom/PictureRoom";
import Price from "./Price/Price";
import ReservedButton from "./ReservedButton/ReservedButton";
import Separator from "./Separator/Separator";

//affciher les chambre
const sectionPresRoom = (
  <div className="presRoom">
    <PictureRoom />
    <div className="infoRoom">
      <div className="description">
        <BedNb />
        <NameRoom />
        <p className="RoomLieux">Strasbourg, France</p>
        <OptionRoom />
      </div>
      <div className="roomBas">
        <section>
          <Descri />
          <Notation />
        </section>
        <div className="tarif">
          <Price />
          <ReservedButton />
        </div>
      </div>
      <LikeButton />
    </div>
  </div>
);

const PresRoom = () => {
  //récupères copie api
  const { copieApi } = UseCopieApiContext();
  return (
    <>
      <Separator />
      {copieApi.length > 0 ? sectionPresRoom : <NotFind />}
      <Separator />
    </>
  );
};

export default PresRoom;
