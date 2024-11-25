import DateReservationCard from "./DateReservationCard/DateReservationCard";
import NameRoomCard from "./NameRoomCard/NameRoomCard";
import NbBedRoomCard from "./NbBedRoomCard/NbBedRoomCard";
import NbpersonneCard from "./NbpersonneCard/NbpersonneCard";
import OptionRoomCard from "./OptionRoomCard/OptionRoomCard";
import PictureRoomCard from "./PictureRoomCard/PictureRoomCard";
import PriceTotalCard from "./PriceTotalCard/PriceTotalCard";
import SeparatorCard from "./SeparatorCard/SeparatorCard";
import PriceRoomCard from "./priceRoomCard/priceRoomCard";

const Card = () => {
  return (
    <div>
      <div>
        <div>
          <NbBedRoomCard />
          <NameRoomCard />
          <p>Strasbourg, France</p>
        </div>
        <PictureRoomCard />
      </div>
      <SeparatorCard />
      <div>
        <DateReservationCard />
        <NbpersonneCard />
      </div>
      <SeparatorCard />
      <div>
        <PriceRoomCard />
        <PriceTotalCard />
      </div>
      <div>
        <OptionRoomCard />
      </div>
    </div>
  );
};

export default Card;
