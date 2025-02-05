import  { useState } from "react"; // Importa React y useState
import "./Orders.css";

const mockOrders = [
  {
    id: "ORD-000001",
    date: "2025-02-04",
    client: "Cliente Prueba",
    assignedTo: "Empleado 1",
    model: "Modelo A",
    status: "Por asignar",
    priority: "Alta",
  },
  {
    id: "ORD-000002",
    date: "2025-02-03",
    client: "Cliente Ejemplo",
    assignedTo: "Empleado 2",
    model: "Modelo B",
    status: "En proceso",
    priority: "Media",
  },
];

function Orders() {
  const [orders, setOrders] = useState(mockOrders);
  const [activeTab, setActiveTab] = useState("Todas");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="orders-page">
      {/* Encabezado */}
      <div className="orders-header">
        <h1>Órdenes</h1>
        <div className="orders-actions">
          <button className="btn">Agregar Estatus</button>
          <button className="btn primary">Crear Orden</button>
        </div>
      </div>

      {/* Pestañas */}
      <div className="orders-tabs">
        {["Todas", "Por asignar", "En proceso", "Por entregar", "Entregado", "Rechazado"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tabla de Órdenes */}
      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Orden</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Asignado a</th>
              <th>Modelo</th>
              <th>Status</th>
              <th>Prioridad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.client}</td>
                <td>{order.assignedTo}</td>
                <td>{order.model}</td>
                <td>
                  <select defaultValue={order.status}>
                    <option value="Por asignar">Por asignar</option>
                    <option value="En proceso">En proceso</option>
                    <option value="Entregado">Entregado</option>
                  </select>
                </td>
                <td>{order.priority}</td>
                <td>
                  <button className="btn edit">Editar</button>
                  <button className="btn delete">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="pagination">
        <button className="page-btn">&laquo;</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">&raquo;</button>
      </div>
    </div>
  );
}

export default Orders;
