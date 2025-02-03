// DashboardLayout.jsx
import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const sidebarRef = useRef(null); // Referencia para el contenedor del Sidebar

  // Función para detectar clics fuera del sidebar

  const handleClickOutside = (event) => {
    // 1) Si hiciste clic dentro del contenedor que envuelve el Sidebar, no colapsar
    if (sidebarRef.current && sidebarRef.current.contains(event.target)) {
      return;
    }
  
    // 2) Si hiciste clic en el botón hamburguesa (clase menu-toggle), no colapsar
    if (event.target.closest(".menu-toggle")) {
      return; 
    }
  
    // 3) En cualquier otro caso, colapsa
    setIsSidebarCollapsed(true);
  };
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dashboard-layout">
      <DashboardNavbar onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      
      <div className="dashboard-body">
        {/* Usa un <div> que envuelve al Sidebar y aplica la ref ahí */}
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
