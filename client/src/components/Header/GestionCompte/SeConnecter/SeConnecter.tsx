import { useState } from "react";
import { UseBakOfficeContext } from "../../../../hooks/UseBakOffice";

interface SeConnecterProps {
  SetpageInscription: (value: boolean) => void;
  setmodalConnection: (value: boolean) => void;
}

const SeConnecter: React.FC<SeConnecterProps> = ({
  SetpageInscription,
  setmodalConnection,
}) => {
  //state de email et du mot de passe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //charger le contexte de bakoffice
  const { bakOffice, setBakOffice } = UseBakOfficeContext();

  //fonction de connection
  function connection() {
    if (bakOffice) {
      bakOffice.compte.map(
        (compte: { mail: string; password: string }, index: number) => {
          if (compte.mail === email && compte.password === password) {
            setBakOffice({ ...bakOffice, compteConnecter: index });
            setmodalConnection(false);
          }
        },
      );
    }
  }

  return (
    <div>
      <p>SE CONNECTER</p>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => connection()}>
          Se connecter
        </button>
      </form>
      <button type="button" onClick={() => SetpageInscription(true)}>
        crée compte
      </button>
      <button type="button" onClick={() => setmodalConnection(false)}>
        Annuler
      </button>
    </div>
  );
};

export default SeConnecter;
