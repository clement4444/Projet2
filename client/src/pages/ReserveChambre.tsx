import "./ReserveChambre.css";
import Card from "../components/BakOffice/Card/Card";
import CalendrierArriver from "../components/BakOffice/ReserverChambre/CalendrierArrival/CalendrierArriver";
import CalendrierDepart from "../components/BakOffice/ReserverChambre/CalendrierDepart/CalendrierDepart";
import BtnNbnuit from "../components/BakOffice/ReserverChambre/btnNbnuit/btnNbnuit";
import BtnValider from "../components/BakOffice/ReserverChambre/btnValider/bntValider";

const ReserveChambre = () => {
  return (
    <div className="reservation-card">
      <div className="reservation-header">
        <h1>RESERVATION</h1>
        <CalendrierDepart />
        <CalendrierArriver />
        <BtnNbnuit />
      </div>

      <div className="details">
        <Card />
      </div>

      <div className="reservation-footer">
        <BtnValider />
      </div>
    </div>
  );
};

export default ReserveChambre;

// <div className="reservation-card">
// <div className="reservation-header">
// <h1>RESERVATION</h1>
// <div className="temps" />
// </div>

// <div className="details">
// <p>1 chambre • 2 personnes</p>
// <p className="location">Strasbourg, France</p>
// <div className="info" />
// </div>

// <div className="reservation-footer">
// <div className="prix" />
// <div className="inclus" />
// </div>
// </div>
