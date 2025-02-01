import StatusCards from "../components/StatusCards";
import OrdersChart from "../components/OrdersChart";
import SalesSummary from "../components/SalesSummary";
import OrdersTable from "../components/OrdersTable";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Panel de Control</h1>

      {/* Tarjetas de Estado */}
      <div className="dashboard-section status-cards">
        <StatusCards />
      </div>

      {/* Gráficos y Resumen */}
      <div className="dashboard-section charts-summary">
        <OrdersChart />
        <SalesSummary />
      </div>

      {/* Tabla de Órdenes */}
      <div className="dashboard-section orders-table">
        <OrdersTable />
      </div>
    </div>
  );
};

export default Dashboard;
