import { UseCopieApiContext } from "../../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../../hooks/UseIndexRoom";

const IconOption = ({ numeros }: { numeros: number }) => {
  //récupé le contexte index
  const { indexRoom } = UseIndexRoomContext();
  //récupé le contexte api
  const { copieApi } = UseCopieApiContext();

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
