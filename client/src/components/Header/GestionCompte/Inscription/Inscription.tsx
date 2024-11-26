interface InscriptionProps {
  SetpageInscription: (value: boolean) => void;
}

const Inscription: React.FC<InscriptionProps> = ({ SetpageInscription }) => {
  return (
    <div>
      <p>INSCRIPTION</p>
      <form>
        <label>
          <input type="radio" name="gender" value="M" />
          M.
        </label>
        <label>
          <input type="radio" name="gender" value="Mme" />
          Mme
        </label>
        <input type="text" placeholder="Prénom" />
        <input type="text" placeholder="nom" />
        <input type="mail" placeholder="adresse mail" />
        <input type="tel" placeholder="telephone" />
        <input type="text" placeholder="Mot de passe" />
        <input type="text" placeholder="adresse" />
        <input type="text" placeholder="code postal" />
        <input type="text" placeholder="ville" />
        <button type="button">suivant</button>
      </form>
      <button type="button" onClick={() => SetpageInscription(false)}>
        Annuler
      </button>
    </div>
  );
};

export default Inscription;
