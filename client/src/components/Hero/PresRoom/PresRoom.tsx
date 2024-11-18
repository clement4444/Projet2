import "./PresRoom.css";

import BedNb from "./BedNb/BedNb";
import Descri from "./Descri/Descri";
import LikeButton from "./LikeButton/LikeButton";
import NameRoom from "./NameRoom/NameRoom";
import Notation from "./Notation/Notation";
import OptionRoom from "./OptionRoom/OptionRoom";
import PictureRoom from "./PictureRoom/PictureRoom";
import Price from "./Price/Price";
import ReservedButton from "./ReservedButton/ReservedButton";
import Separator from "./Separator/Separator";

const PresRoom = () => {
  return (
    <>
      <Separator />
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
      <Separator />
    </>
  );
};

export default PresRoom;
