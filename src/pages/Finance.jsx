import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./Finance.css";

function Finance() {
  const [timePeriod, setTimePeriod] = useState("Semana");

  // Datos para el gráfico circular (Ventas)
  const pieData = {
    labels: ["Servicios", "Productos", "Otros"],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ["#4185f4", "#fbbc04", "#34a853"],
      },
    ],
  };

  // Datos para el gráfico de línea (Historial de ventas)
  const lineData = {
    labels: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    datasets: [
      {
        label: "Ventas",
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: "#4185f4",
        fill: false,
      },
    ],
  };

  return (
    <div className="finance-page">
      <div className="tabs">
        <button
          className={`tab ${timePeriod === "Semana" ? "active" : ""}`}
          onClick={() => setTimePeriod("Semana")}
        >
          Semana
        </button>
        <button
          className={`tab ${timePeriod === "Mes" ? "active" : ""}`}
          onClick={() => setTimePeriod("Mes")}
        >
          Mes
        </button>
        <button
          className={`tab ${timePeriod === "Año" ? "active" : ""}`}
          onClick={() => setTimePeriod("Año")}
        >
          Año
        </button>
      </div>

      <div className="finance-charts">
        {/* Gráfico circular */}
        <div className="chart-container">
          <h3>Ventas</h3>
          <p>Ventas totales por un valor de $0.00</p>
          <Pie data={pieData} />
        </div>

        {/* Gráfico de línea */}
        <div className="chart-container">
          <h3>Historial de Ventas</h3>
          <p>Ticket promedio con valor de $0.00</p>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
}

export default Finance;
