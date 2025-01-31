import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Reutilizamos el Navbar
import "./Register.css"; // Estilos de la página de registro

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Registro:", { email, password });
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="register-card">
          <h2 className="register-title">Crear cuenta</h2>
          <form onSubmit={handleRegister}>
            <label className="register-label" htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              className="register-input"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="register-label" htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              className="register-input"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label className="register-label" htmlFor="confirm-password">Confirmar Contraseña</label>
            <input
              id="confirm-password"
              type="password"
              className="register-input"
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit" className="register-button">Registrarse</button>
          </form>
          <p className="register-footer">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
