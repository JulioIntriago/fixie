import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setIsLoading(true);

    try {
      // Simula una llamada a la API
      const response = await fakeLoginApi(email, password);
      console.log("Inicio de sesión exitoso:", response);
      // Redirige al dashboard o realiza otras acciones
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Correo electrónico o contraseña incorrectos.");
    } finally {
      setIsLoading(false);
    }
  };

  const fakeLoginApi = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "password123") {
          resolve({ user: "Test User" });
        } else {
          reject(new Error("Credenciales inválidas"));
        }
      }, 1000);
    });
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Iniciar sesión</h2>
          {error && <p className="login-error">{error}</p>}
          <form onSubmit={handleLogin}>
            <label className="login-label" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              className="login-input"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="login-label" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="login-input"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? "Cargando..." : "Iniciar sesión"}
            </button>
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