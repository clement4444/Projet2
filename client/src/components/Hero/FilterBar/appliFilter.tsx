import { useEffect } from "react";
import { UseApiContext } from "../../../hooks/UseApi";
import { UseCopieApiContext } from "../../../hooks/UseCopieApi";

const appliFilter = (optionCocher: string[], textSearchBar: string) => {
  const { setCopieApi } = UseCopieApiContext();
  const { api } = UseApiContext();

  //actualiser la copi api a chaque modification
  useEffect(() => {
    //parti verif option--------------------------------------
    let newApi = [...api];
    //filtre tout les élément qui respect pas les filtre
    newApi = newApi.filter((chambre) => {
      //décompose élement en équipement
      const equipements = chambre.equipements;
      //verifie que tout les équipement selectioner sont dans la chambre
      if (
        optionCocher.every((element: string) => equipements.includes(element))
      ) {
        return true;
      }
      return false;
    });
    //parti recharche-------------------------------------------
    newApi = newApi.filter((chambre) =>
      chambre.nom.toLowerCase().includes(textSearchBar),
    );

    //applique les filtre
    setCopieApi(newApi);
  }, [optionCocher, api, setCopieApi, textSearchBar]);
};

export default appliFilter;
