// src/components/OrdersTable.jsx
import "./OrdersTable.css";

const OrdersTable = () => {
  return (
    <div className="orders-table">
      <h3>Órdenes Recientes</h3>
      <table>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#001</td>
            <td>10/11/2024</td>
            <td>Juan Pérez</td>
            <td>En Proceso</td>
            <td>$150.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
