import "./ReservedButton.css";
import { useNavigate } from "react-router-dom";

function ReservedButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/reserve"); // Redirige vers la page /reserve
  };

  return (
    <div>
      <button className="toBook" type="button" onClick={handleClick}>
        Réserver
      </button>
    </div>
  );
}

export default ReservedButton;
