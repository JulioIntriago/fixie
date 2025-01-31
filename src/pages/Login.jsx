import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Reutilizamos el Navbar
import "./Login.css"; // Estilos de la página de inicio de sesión

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Inicio de sesión con:", { email, password });
    // Aquí podrías manejar la lógica para autenticar al usuario
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Iniciar sesión</h2>
          <form onSubmit={handleLogin}>
            <label className="login-label" htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              className="login-input"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="login-label" htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              className="login-input"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">Iniciar sesión</button>
          </form>
          <p className="login-footer">
            ¿Aún no tienes cuenta? <Link to="/register">Regístrate</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
