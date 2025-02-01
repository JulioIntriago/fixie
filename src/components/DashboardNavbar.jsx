// src/components/DashboardNavbar.jsx
import { useState } from "react";
import { FaBars, FaBell, FaPlus, FaUserCircle } from "react-icons/fa";
import "./DashboardNavbar.css";

// eslint-disable-next-line react/prop-types
const DashboardNavbar = ({ onToggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log("Cerrar sesión");
  };

  return (
    <nav className="dashboard-navbar">
      {/* Menú Hamburguesa */}
      <button className="menu-toggle" onClick={onToggleSidebar}>
        <FaBars size={20} />
      </button>

      {/* Logo */}
      <div className="logo">Fixie</div>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar en órdenes, clientes, IMEI" />
      </div>

      {/* Acciones */}
      <div className="actions">
        {/* Botón "Agregar" */}
        <button className="action-btn">
          <FaPlus size={20} />
        </button>

        {/* Botón "Notificaciones" */}
        <button className="action-btn">
          <FaBell size={20} />
        </button>

        {/* Menú del Usuario */}
        <div className="user-icon">
          <button className="action-btn" onClick={toggleDropdown}>
            <FaUserCircle size={24} />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/admin">Administración</a>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
