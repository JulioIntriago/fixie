// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./layouts/DashboardLayout";

/* Importa tus páginas dentro del Dashboard */
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Clients from "./pages/Clients";
import Providers from "./pages/Providers";
import Services from "./pages/Services";
import Finance from "./pages/Finance";
import Tutorials from "./pages/Tutorials";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas del Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} /> 
          <Route path="orders" element={<Orders />} />
          <Route path="clients" element={<Clients />} />
          <Route path="providers" element={<Providers />} />
          <Route path="services" element={<Services />} />
          <Route path="finance" element={<Finance />} />
          <Route path="tutorials" element={<Tutorials />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
