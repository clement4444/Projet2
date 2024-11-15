import { UseCopieApiContext } from "../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../hooks/UseIndexRoom";

const Price = () => {
  //récupé le contexte index
  const { indexRoom } = UseIndexRoomContext();
  //récupé le contexte api
  const { copieApi } = UseCopieApiContext();

  return (
    <div>
      <p>{copieApi[indexRoom].prix_par_nuit}€</p>
      <p>par nuit</p>
    </div>
  );
};

export default Price;
