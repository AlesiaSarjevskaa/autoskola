import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { contactInfo, navigationItems, newsItems } from "../data/siteContent"
import "../pages/Home/Home.css"

const topNavigationItems = [
  { label: "O nás", path: "/o-nas" },
  { label: "Ceník", path: "/cenik" },
  { label: "Přihláška", path: "/prihlaska", isHighlighted: true },
  { label: "Kontakty", path: "/kontakt" },
]

export default function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="home-page">
      <header className="site-header">
        <NavLink className="site-brand" to="/" onClick={() => setIsMenuOpen(false)}>
          AUTOŠKOLA JIŘÍ JIRÁČEK
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Zavřít hlavní menu" : "Otevřít hlavní menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`site-nav${isMenuOpen ? " site-nav-open" : ""}`}
          aria-label="Hlavní navigace"
        >
          {topNavigationItems.map((item) => (
            <NavLink
              key={item.path}
              className={({ isActive }) =>
                `nav-button${item.isHighlighted ? " nav-button-cta" : ""}${
                  isActive ? " nav-button-active" : ""
                }`
              }
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="content-shell content-shell-routed">
        <aside className="sidebar-panel">
          <div className="panel-block">
            <p className="panel-title">Menu</p>
            <div className="menu-list">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  className={({ isActive }) =>
                    isActive ? "menu-link-active" : undefined
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="panel-block">
            <p className="panel-title">Novinky</p>
            <div className="news-list">
              {newsItems.map((item) => (
                <article key={item.slug} className="news-card">
                  <p className="news-date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </aside>

        <div className="main-content">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>{contactInfo.company}</h2>
        </div>

        <div className="footer-contact">
          <p>{contactInfo.address}</p>
          <a href={`tel:${contactInfo.phone.replaceAll(" ", "")}`}>{contactInfo.phone}</a>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <p>IČ: {contactInfo.ico}</p>
        </div>
      </footer>
    </div>
  )
}
