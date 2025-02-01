import "./StatusCards.css";
import { FaUserCircle, FaTasks, FaBoxOpen } from "react-icons/fa";

const StatusCards = () => {
  return (
    <div className="status-cards">
      <div className="card">
        <FaUserCircle className="icon" />
        <h3>0 Por Asignar</h3>
      </div>
      <div className="card">
        <FaTasks className="icon" />
        <h3>0 En Proceso</h3>
      </div>
      <div className="card">
        <FaBoxOpen className="icon" />
        <h3>0 Por Entregar</h3>
      </div>
    </div>
  );
};

export default StatusCards;
