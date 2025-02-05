import  { useState } from "react";
import "./Providers.css";

// Mock data para proveedores
const mockProviders = [
  {
    id: 1,
    name: "Proveedora Tech",
    contact: "Andrea López",
    email: "contacto@proveedoratech.com",
    phone: "0987654321",
    website: "www.proveedoratech.com",
    description: "Proveedora de servicios tecnológicos",
  },
  {
    id: 2,
    name: "Servicios ABC",
    contact: "Luis Torres",
    email: "servicios@abc.com",
    phone: "0998765432",
    website: "www.serviciosabc.com",
    description: "Servicios generales de oficina",
  },
];

function Providers() {
  const [providers, setProviders] = useState(mockProviders);

  return (
    <div className="providers-page">
      {/* Encabezado */}
      <div className="providers-header">
        <h1>Proveedores</h1>
        <button className="btn primary">Crear Proveedor</button>
      </div>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar por nombre, apellido o correo electrónico" />
      </div>

      {/* Tabla de proveedores */}
      <div className="providers-table">
        <table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Persona de contacto</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Sitio Web</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {providers.length > 0 ? (
              providers.map((provider) => (
                <tr key={provider.id}>
                  <td>{provider.name}</td>
                  <td>{provider.contact}</td>
                  <td>{provider.email}</td>
                  <td>{provider.phone}</td>
                  <td>
                    <a href={`https://${provider.website}`} target="_blank" rel="noopener noreferrer">
                      {provider.website}
                    </a>
                  </td>
                  <td>{provider.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No se han agregado proveedores
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Providers;
