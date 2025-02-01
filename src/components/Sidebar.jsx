// src/components/Sidebar.jsx
import PropTypes from "prop-types";
import { FaHome, FaBox, FaUsers, FaTruck, FaWrench, FaChartBar, FaBook } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isCollapsed }) => {
  const menuItems = [
    { icon: <FaHome />, label: "Inicio", path: "/dashboard" },
    { icon: <FaBox />, label: "Órdenes", path: "/dashboard/orders" },
    { icon: <FaUsers />, label: "Clientes", path: "/dashboard/clients" },
    { icon: <FaTruck />, label: "Proveedores", path: "/dashboard/providers" },
    { icon: <FaWrench />, label: "Servicios", path: "/dashboard/services" },
    { icon: <FaChartBar />, label: "Finanzas", path: "/dashboard/finances" },
    { icon: <FaBook />, label: "Tutoriales", path: "/dashboard/tutorials" },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <nav>
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.path} className="menu-link">
                <span className="menu-icon">{item.icon}</span>
                {!isCollapsed && <span className="menu-label">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
