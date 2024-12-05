import React from "react";
import { Link } from "react-router-dom";

import Carousel from "../components/Carousel";
import Praias from "../components/Praias";

import { Helmet } from 'react-helmet-async';

// Logo and Maps
import logo from "../assets/img/logo.png";
import mapaCopa from "../assets/img/mapacopa.png";
import mapaIpa from "../assets/img/mapaipa.png";
import mapaLe from "../assets/img/mapale2.png";


// Product Images
import protetorImg from "../assets/img/protetor.webp";
import posSolImg from "../assets/img/pos.webp";
import repelenteImg from "../assets/img/repelente.png";
import cabeloImg from "../assets/img/cabelo.webp";

// Rental Images
import pranchaImg from "../assets/img/prancha.webp";
import cadeiraImg from "../assets/img/cadeira.webp";
import guardaSolImg from "../assets/img/guardasol.webp";
import kitImg from "../assets/img/kit.webp";

const Index = () => {
  const alterarInformacoes = () => {
    // Implement your function logic here
  };

  const carouselImages = [
    { src: mapaCopa, alt: "Mapa Copacabana" },
    { src: mapaIpa, alt: "Mapa Ipanema" },
    { src: mapaLe, alt: "Mapa Leblon" },
  ];

  return (
    <>
     <Helmet>
        <link rel="stylesheet" href="./src/pages/index.css" />
      </Helmet>
    <div>
      <div id="background"></div>
      <div className="background">
        <header className="menu2">
          <div className="logo">
            <Link to="#background">
              <img src={logo} alt="Logo" className="logo-icon" />
            </Link>
          </div>
          <nav className="menu">
            <ul>
              <li>
                <Link to="#background">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li>
                <Link to="#praias">
                  <i className="fas fa-info-circle"></i> Praias
                </Link>
              </li>
              <li>
                <Link to="#produtos">
                  <i className="fas fa-phone-alt"></i> Produtos
                </Link>
              </li>
            </ul>
            <div className="search">
              <input type="text" placeholder="Pesquisar..." id="search-input" />
              <button id="search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <Link to="/login" id="login-button">
              <i className="fas fa-sign-in-alt"></i> Login
            </Link>
          </nav>
        </header>

        <main>
          <section className="intro">
            <h1>
              <span>RIO</span> DE JANEIRO
            </h1>
            <p className="subtitle">
              Este espaço oferecerá uma variedade de serviços e comodidades para
              atender às necessidades dos visitantes, garantindo que todos
              desfrutem ao máximo de sua estadia na praia.
            </p>
          </section>

          <Carousel images={carouselImages} />
          <div id="praias"></div>
        </main>
      </div>

      <Praias />

      <section className="product-items">
        <div id="produtos"></div>
        <h2>Itens disponíveis para compra</h2>
        <p>
          Confira os produtos disponíveis no container abaixo e escolha o seu!
        </p>
        <div className="items-grid">
          <div className="item">
            <img src={protetorImg} alt="Protetor Solar" />
            <h3>Protetor Solar</h3>
            <span>R$49,99</span>
          </div>
          <div className="item">
            <img src={posSolImg} alt="Pós Sol" />
            <h3>Pós Sol</h3>
            <span>R$99,90</span>
          </div>
          <div className="item">
            <img src={repelenteImg} alt="Repelente" />
            <h3>Repelente</h3>
            <span>R$19,99</span>
          </div>
          <div className="item">
            <img src={cabeloImg} alt="Protetor Solar Capilar" />
            <h3>Protetor Solar Capilar</h3>
            <span>R$199,90</span>
          </div>
        </div>
      </section>

      <section className="product-items" id="produtos">
        <h2>Itens disponíveis para aluguel</h2>
        <div className="items-grid">
          <div className="item">
            <img src={pranchaImg} alt="Prancha" />
            <h3>Pranchas (tipo: Longboard, Funboard, Shortboard e Stand up)</h3>
            <span>R$29,99</span>
          </div>
          <div className="item">
            <img src={cadeiraImg} alt="Cadeira de praia" />
            <h3>Cadeira de praia</h3>
            <span>R$9,90</span>
          </div>
          <div className="item">
            <img src={guardaSolImg} alt="Guarda sol" />
            <h3>Guarda sol</h3>
            <span>R$19,99</span>
          </div>
          <div className="item">
            <img src={kitImg} alt="Kit praia" />
            <h3>Kit 1 guarda sol + 2 cadeiras de praia</h3>
            <span>R$29,99</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 RIO | Todos os direitos reservados</p>
          <div className="social-links">
            <Link to="#" className="social-icon">
              Facebook
            </Link>
            <Link to="#" className="social-icon">
              Instagram
            </Link>
            <Link to="#" className="social-icon">
              Twitter
            </Link>
          </div>
        </div>
      </footer>
    </div></>
  );
};

export default Index;
