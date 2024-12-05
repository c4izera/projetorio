// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    date: "",
    time: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/agendamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: formData.username,
          senha: formData.password,
          data: formData.date,
          horario: formData.time,
          local: formData.location,
        }),
      });

      if (response.ok) {
        alert("Agendamento realizado com sucesso!")
        navigate("/");
      } else {
        console.error("Erro no agendamento");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="./src/pages/login.css" />
      </Helmet>
      <div className="container-login">
        <Header />
        <main>
          <h2>
            Contêiner
            <br />
            Rio de Janeiro
          </h2>
          <LoginForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
          <div className="help-link">Precisa de ajuda?</div>
        </main>
      </div>
    </>
  );
};

const Header = () => (
  <header className="loginheader">
    <div className="logo">
      <img src={logo} alt="Logo" className="logo-icon" />
      <div>
        <h1>Rio de Janeiro</h1>
        <p>IFSP Caraguatatuba</p>
      </div>
    </div>
    <MenuIcon />
  </header>
);

const MenuIcon = () => (
  <div className="menu-icon">
    <div></div>
    <div></div>
    <div></div>
  </div>
);

const LoginForm = ({ formData, handleInputChange, handleSubmit }) => (
  <form id="login-form" onSubmit={handleSubmit}>
    <InputGroup
      icon="user"
      type="text"
      placeholder="Usuário"
      id="username"
      value={formData.username}
      onChange={handleInputChange}
    />
    <InputGroup
      icon="lock"
      type="password"
      placeholder="Senha"
      id="password"
      value={formData.password}
      onChange={handleInputChange}
    />

    <p className="info-text">
      Agende o aluguel de cadeiras, guarda-sóis e/ou guarda-volumes para sua
      praia favorita!
    </p>

    <InputGroup
      icon="calendar-alt"
      type="date"
      id="date"
      value={formData.date}
      onChange={handleInputChange}
    />
    <InputGroup
      icon="clock"
      type="time"
      id="time"
      value={formData.time}
      onChange={handleInputChange}
    />

    <LocationSelect value={formData.location} onChange={handleInputChange} />

    <button type="submit" id="login-button">
      Login
    </button>
  </form>
);

const InputGroup = ({ icon, type, placeholder, id, value, onChange }) => (
  <div className="input-group">
    <span>
      <i className={`fas fa-${icon}`}></i>
    </span>
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
    />
  </div>
);

const LocationSelect = ({ value, onChange }) => (
  <div className="input-group">
    <span>
      <i className="fas fa-map-marker-alt"></i>
    </span>
    <select id="location" value={value} onChange={onChange}>
      <option value="" disabled>
        Selecione um local
      </option>
      <option value="ipanema">Ipanema</option>
      <option value="leblon">Leblon</option>
      <option value="copacabana">Copacabana</option>
    </select>
  </div>
);

export default Login;
