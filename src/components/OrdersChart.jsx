// src/components/OrdersChart.jsx
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./OrdersChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const OrdersChart = () => {
  const data = {
    labels: ["Por Asignar", "En Proceso", "Por Entregar"],
    datasets: [
      {
        label: "Órdenes",
        data: [5, 10, 15],
        backgroundColor: ["#F95454", "#77CDFF", "#0D92F4"],
      },
    ],
  };

  return (
    <div className="orders-chart">
      <h3>Estado de Órdenes</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default OrdersChart;
