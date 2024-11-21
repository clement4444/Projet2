import "./ReserveChambre.css";

const ReserveChambre = () => {
  return (
    <div className="reservation-card">
      <header className="reservation-header">
        <h1>RESERVATION</h1>
        <div className="temps" />
      </header>

      <main className="details">
        <p>1 chambre • 2 personnes</p>
        <p className="location">Strasbourg, France</p>
        <div className="info" />
      </main>

      <footer className="reservation-footer">
        <div className="prix" />
        <div className="inclus" />
      </footer>
    </div>
  );
};

export default ReserveChambre;
