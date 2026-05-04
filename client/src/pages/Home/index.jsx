import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"


export default function Home() {
  return (
    <>
    <div className="page-wrapper">
      {/* Horní menu */}
      <header className="header">
        <h1 className="logo">Autoškola Jiří Jiráček</h1>
        <nav className="nav-links">
          <a href="#onas">O nás</a>
          <a href="#cenik">Ceník</a>
          <a href="#prihlaska">Přihláška</a>
          <a href="#kontakty">Kontakty</a>
        </nav>
      </header>

      {/* Hlavní obrázek s textem */}
      <section className="hero">
        <div className="hero-content">
          <h2>Naučíme vás řídit bezpečně, sebejistě a bez stresu.</h2>
          <input type="text" placeholder="Vyhledávání..." className="search-bar" />
        </div>
      </section>

      {/* Hlavní obsahová část */}
      <main className="main-layout">
        {/* Levý sloupec */}
        <aside className="sidebar">
          <div className="menu-group">
            <h3 className="menu-title">Menu</h3>
            <ul>
              <li>Úvod</li>
              <li>O nás</li>
              <li>Služby</li>
              <li>Fotogalerie</li>
              <li>Kontakt</li>
            </ul>
          </div>
          <div className="news-box">
            <h3 className="menu-title">Novinky</h3>
            <p><strong>Nový kurz 14. 2. 2026</strong></p>
            <p>Výuka skupin B, A1, A2 začne v 10:00 v učebně...</p>
          </div>
        </aside>

        {/* Pravý sloupec (Vítejte) */}
        <div className="content">
          <div className="welcome-header">
            <h2 className="welcome-title">Vítejte</h2>
            <div className="school-info">Autoškola Jiří Jiráček<br/>v Mnichově Hradišti</div>
          </div>
          
          <p className="intro-text">Naučíme vás řídit s jistotou a bez stresu.</p>
          
          <div className="offer-badges">
            <span>Řidičská oprávnění: B, A1, A2, A</span>
            <span>Intenzivní kurzy</span>
            <span>Kondiční jízdy</span>
          </div>

          <h3 className="section-subtitle">Služby</h3>
          <div className="services-grid">
            <div className="service-card"><strong>B</strong><span>Osobní automobily</span></div>
            <div className="service-card"><strong>A1</strong><span>Malé motocykly</span></div>
            <div className="service-card"><strong>A2</strong><span>Větší motocykly</span></div>
            <div className="service-card"><strong>A</strong><span>Motocykly</span></div>
            <div className="service-card"><strong>Kondiční jízdy</strong></div>
            <div className="service-card"><strong>Školení řidičů</strong></div>
          </div>
        </div>
      </main>

      {/* Fotogalerie */}
      <section className="gallery">
        <h3>Fotogalerie</h3>
        <div className="gallery-grid">
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
        </div>
      </section>

      {/* Patička */}
      <footer className="footer">
        <div className="avatar-group">
          <div className="avatar"></div>
          <div className="avatar"></div>
        </div>
        <div className="contact-info">
          <h4>Kontakt</h4>
          <p>Jaseiska 1173, Mnichovo Hradiště</p>
          <p>+420 737 286 495</p>
          <p className="email">autoskola.jiracek@seznam.cz</p>
        </div>
      </footer>
    </div>
    </>
  )
}
