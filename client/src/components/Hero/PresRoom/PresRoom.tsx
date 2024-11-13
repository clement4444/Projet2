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
    <div className="presRoom">
      <Separator />
      <PictureRoom />
      <div className="description">
        <BedNb />
        <NameRoom />
        <p>Strasbourg, France</p>
        <OptionRoom />
        <Descri />
        <Notation />
      </div>
      <LikeButton />
      <div className="tarif">
        <Price />
        <ReservedButton />
      </div>
      <Separator />
    </div>
  );
};

export default PresRoom;
