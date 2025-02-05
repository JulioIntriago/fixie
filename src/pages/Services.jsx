import  { useState } from "react";
import "./Services.css";

// Mock data para servicios
const mockServices = [
  { id: 1, name: "Microsoldadura" },
  { id: 2, name: "Pin de Carga" },
  { id: 3, name: "Instalación de Pantalla" },
  { id: 4, name: "Cambio de Teclados" },
  { id: 5, name: "Limpieza / Varios" },
  { id: 6, name: "Mantenimiento del Equipo" },
  { id: 7, name: "Equipo Mojado / Varios" },
  { id: 8, name: "Revisión de Equipo" },
  { id: 9, name: "Instalación de Batería" },
  { id: 10, name: "Otro" },
];

function Services() {
  const [services, setServices] = useState(mockServices);

  return (
    <div className="services-page">
      {/* Encabezado */}
      <div className="services-header">
        <h1>Servicios</h1>
        <button className="btn primary">Crear servicio</button>
      </div>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar por nombre del servicio o descripción" />
      </div>

      {/* Tabla de servicios */}
      <div className="services-table">
        <table>
          <thead>
            <tr>
              <th>Servicio</th>
            </tr>
          </thead>
          <tbody>
            {services.length > 0 ? (
              services.map((service) => (
                <tr key={service.id}>
                  <td>{service.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="1" style={{ textAlign: "center" }}>
                  No se han agregado servicios
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;
