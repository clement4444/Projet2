import "./PresRoom.css";

const PresRoom = () => {
  return (
    <div className="presRoom">
      <div className="room">
        <img src="../../../src/assets/images/ConfRoom.png" alt="Chambre" />
      </div>
      <div className="description">
        <p>NbrPers</p>
        <p>NameRoom</p>
        <p>Strasbourg, France</p>
        <p>Description</p>
        <p>évaluation</p>
      </div>
      <div className="tarif">
        <p>Prix</p>
        <button className="toBook">Réserver</button>
      </div>
      <div className="ligne"></div>
    </div>
  );
};

export default PresRoom;
