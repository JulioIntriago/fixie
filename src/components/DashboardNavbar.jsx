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
    // Aquí podrías redirigir al usuario o limpiar el estado de autenticación.
  };

  return (
    <nav className="dashboard-navbar">
      <button className="menu-toggle" onClick={onToggleSidebar}>
        <FaBars size={20} />
      </button>

      <div className="logo">Fixie</div>

      <div className="search-bar">
        <input type="text" placeholder="Buscar en órdenes, clientes, IMEI" />
      </div>

      <div className="actions">
        <button className="action-btn">
          <FaPlus size={20} />
        </button>
        <button className="action-btn">
          <FaBell size={20} />
        </button>
        <div className="user-icon">
          <button className="action-btn" onClick={toggleDropdown}>
            <FaUserCircle size={24} />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/admin">Administración</a>
              <a href="#" onClick={handleLogout}>
                Cerrar sesión
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
