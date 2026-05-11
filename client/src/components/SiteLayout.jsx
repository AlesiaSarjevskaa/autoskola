import { NavLink, Outlet } from "react-router-dom"
import { contactInfo, navigationItems, newsItems } from "../data/siteContent"
import "../pages/Home/Home.css"

export default function SiteLayout() {
  return (
    <div className="home-page">
      <header className="site-header">
        <NavLink className="site-brand" to="/">
          AUTOŠKOLA JIŘÍ JIRÁČEK
        </NavLink>

        <nav className="site-nav" aria-label="Hlavní navigace">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              className={({ isActive }) =>
                `nav-button${isActive ? " nav-button-active" : ""}`
              }
              to={item.path}
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
