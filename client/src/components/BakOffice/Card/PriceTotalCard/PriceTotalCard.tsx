import "./PriceTotalCard.css";

const PriceTotalCard = () => {
  return (
    <div className="price-total-card">
      <p className="total-label">
        <strong>Total :</strong>
      </p>
      <p className="total-value">
        <strong>360,00€</strong>
      </p>
    </div>
  );
};

export default PriceTotalCard;
