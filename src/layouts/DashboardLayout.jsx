// src/layouts/DashboardLayout.jsx

import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Antes apuntaba directamente al Sidebar, pero ahora apuntará al contenedor <div>
  const sidebarRef = useRef(null);

  // Detectar clic fuera del contenedor que envuelve el sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      // Si el clic NO ocurre dentro de sidebarRef, colapsa el sidebar
      setIsSidebarCollapsed(true);
    }
  };

  useEffect(() => {
    // Suscribirse al evento mousedown al montar
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar el evento al desmontar
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dashboard-layout">
      <DashboardNavbar
        onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      <div className="dashboard-body">
        {/* Envuelve Sidebar dentro de un div al que le ponemos la ref */}
        <div ref={sidebarRef}>
          <Sidebar isCollapsed={isSidebarCollapsed} />
        </div>

        <main className={`main-content ${isSidebarCollapsed ? "collapsed" : ""}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
