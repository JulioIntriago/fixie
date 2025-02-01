import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const sidebarRef = useRef(null); // Referencia para el Sidebar

  // Función para detectar clics fuera del sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarCollapsed(true); // Colapsa el sidebar si el clic está fuera
    }
  };

  useEffect(() => {
    // Agrega el evento al montar el componente
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remueve el evento al desmontar el componente
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dashboard-layout">
      <DashboardNavbar onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      <div className="dashboard-body">
        {/* Pasamos la referencia al Sidebar */}
        <Sidebar ref={sidebarRef} isCollapsed={isSidebarCollapsed} />
        <main className={`main-content ${isSidebarCollapsed ? "collapsed" : ""}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
