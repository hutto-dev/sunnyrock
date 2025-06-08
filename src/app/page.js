import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">SunnyRock</h1>
          {/* <nav>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#partners">Partners</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav> */}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2>Empowering Blockchain Scalability</h2>
              <p>
                At SunnyRock, we contribute to blockchain scalability by running
                validator nodes that validate and record transactions across
                decentralized platforms.
              </p>
            </div>
            <div className="hero-image">
              <img src="/assets/tech-image.jpg" alt="Blockchain Technology" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About SunnyRock</h2>
          <p>
            SunnyRock is a company specializing in operating validator nodes to
            support the security and efficiency of blockchain networks. By
            running these nodes, SunnyRock ensures transaction validation and
            network stability for its partner companies, contributing to
            decentralized ecosystems.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="partners">
        <div className="container">
          <h2>Currently running nodes on...</h2>
          <div className="partner-grid">
            <div className="partner-item">
              <img
                src="/assets/partner-logo-1.png"
                alt="Blockchain Partner 1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-grid">
            <div className="service-item">
              <h3>Validator Node Operations</h3>
              <p>
                We run high-performance validator nodes to ensure fast and
                secure transaction validation across blockchain networks.
              </p>
            </div>
            <div className="service-item">
              <h3>Network Stability</h3>
              <p>
                Our infrastructure supports the stability and uptime of
                decentralized platforms for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 SunnyRock. All rights reserved.</p>
          <p>info@sunnyrock.org</p>
        </div>
      </footer>
    </div>
  );
}
