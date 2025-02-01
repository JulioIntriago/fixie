import "./SalesSummary.css";

const SalesSummary = () => {
  return (
    <div className="sales-summary">
      <h3>Ventas Totales</h3>
      <p className="sales-total">$0.00</p>
      <div className="time-buttons">
        <button className="active">Hoy</button>
        <button>Semana</button>
        <button>Mes</button>
      </div>
    </div>
  );
};

export default SalesSummary;
