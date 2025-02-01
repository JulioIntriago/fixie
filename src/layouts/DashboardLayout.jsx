// src/layouts/DashboardLayout.jsx
import { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import "./DashboardLayout.css";

// eslint-disable-next-line react/prop-types
const DashboardLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="dashboard-layout">
      <DashboardNavbar onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      <div className="dashboard-body">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <main className={`main-content ${isSidebarCollapsed ? "collapsed" : ""}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
