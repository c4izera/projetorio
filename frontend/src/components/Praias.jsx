import React, { useState } from "react";
import { Link } from "react-router-dom";

// Beach Images
import copacabanaImg from "../assets/img/copa.jpg";
import ipanemaImg from "../assets/img/ipane.webp";
import leblonImg from "../assets/img/leb.webp";

const Praias = () => {
  const [praias, setPraias] = useState({
    copacabana: {
      status: "",
      temperatura: "",
      isImpropria: false,
    },
    ipanema: {
      status: "",
      temperatura: "",
      isImpropria: false,
    },
    leblon: {
      status: "",
      temperatura: "",
      isImpropria: false,
    },
  });

  const alterarInformacoes = () => {
    setPraias({
      copacabana: {
        status: "imprópria",
        temperatura: "27°C",
        isImpropria: true,
      },
      ipanema: {
        status: "imprópria",
        temperatura: "29°C",
        isImpropria: true,
      },
      leblon: {
        status: "própria",
        temperatura: "22°C",
        isImpropria: false,
      },
    });
  };

  return (
    <div className="container">
      <h1 className="title">PRAIAS</h1>
      <div className="cards">
        <div className="card">
          <img
            src={copacabanaImg}
            alt="Praia de Copacabana"
            width="200"
            height="170"
          />
          <h2>Copacabana</h2>
          <p>
            Para banho:{" "}
            <span
              className={`status ${
                praias.copacabana.isImpropria ? "impropria" : "propria"
              }`}
            >
              {praias.copacabana.status}
            </span>
          </p>
          <p>
            Clima: <span>{praias.copacabana.temperatura}</span>
          </p>
          <p>
            Mapa-guia: <Link to="#">Abrir</Link>
          </p>
        </div>
        <div className="card">
          <img
            src={ipanemaImg}
            alt="Praia de Ipanema"
            width="200"
            height="170"
          />
          <h2>Ipanema</h2>
          <p>
            Para banho:{" "}
            <span
              className={`status ${
                praias.ipanema.isImpropria ? "impropria" : "propria"
              }`}
            >
              {praias.ipanema.status}
            </span>
          </p>
          <p>
            Clima: <span>{praias.ipanema.temperatura}</span>
          </p>
          <p>
            Mapa-guia: <Link to="#">Abrir</Link>
          </p>
        </div>
        <div className="card">
          <img src={leblonImg} alt="Praia do Leblon" width="200" height="170" />
          <h2>Leblon</h2>
          <p>
            Para banho:{" "}
            <span
              className={`status ${
                praias.leblon.isImpropria ? "impropria" : "propria"
              }`}
            >
              {praias.leblon.status}
            </span>
          </p>
          <p>
            Clima: <span>{praias.leblon.temperatura}</span>
          </p>
          <p>
            Mapa-guia: <Link to="#">Abrir</Link>
          </p>
        </div>
      </div>
      <button onClick={alterarInformacoes}>Confira as informações</button>
    </div>
  );
};

export default Praias;
