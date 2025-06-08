import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import "./home.css";
import techImage from "./assets/tech-image.jpg";

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
                <a href="#contact">Contact</a>x
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
              <img src={techImage} alt="Blockchain Technology" />
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
          <div className="social-links">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
