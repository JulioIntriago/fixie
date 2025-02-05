import  { useState } from "react";
import "./Clients.css";

// Mock data para los clientes
const mockClients = [
  { id: 1, name: "Juan Pérez", email: "juan.perez@gmail.com", phone: "0987654321", orders: 5 },
  { id: 2, name: "María Gómez", email: "maria.gomez@hotmail.com", phone: "0998765432", orders: 2 },
  { id: 3, name: "Carlos Martínez", email: "carlos.martinez@yahoo.com", phone: "0976543210", orders: 0 },
];

function Clients() {
  const [clients, setClients] = useState(mockClients);

  return (
    <div className="clients-page">
      {/* Encabezado */}
      <div className="clients-header">
        <h1>Clientes</h1>
        <div className="clients-actions">
          <button className="btn">Importar</button>
          <button className="btn primary">Crear cliente</button>
        </div>
      </div>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar por nombre, apellido o correo electrónico" />
      </div>

      {/* Tabla de clientes */}
      <div className="clients-table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Órdenes</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
                  <button className="btn view-orders">Ver Órdenes ({client.orders})</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clients;
