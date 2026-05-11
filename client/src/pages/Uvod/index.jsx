import { Link } from "react-router-dom"
import PageIntro from "../shared/PageIntro"
import { serviceCards } from "../../data/siteContent"

export default function UvodPage() {
  return (
    <>
      <section className="hero-section hero-section-compact">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-kicker">Mnichovo Hradiště a okolí</p>
          <h1>Naučíme vás řídit bezpečně, sebejistě a bez stresu.</h1>
          <p className="hero-text">
            Profesionální přístup, klidná výuka a zkušenosti, které vás spolehlivě
            dovedou k řidičskému oprávnění.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/prihlaska">
              Přihlásit se
            </Link>
            <Link className="secondary-button" to="/sluzby">
              Zobrazit služby
            </Link>
          </div>
        </div>
      </section>

      <section className="welcome-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Autoškola Jiří Jiráček</p>
            <h2>Vítejte</h2>
          </div>
          <p className="heading-note">v Mnichově Hradišti</p>
        </div>

        <p className="lead-text">
          Naše autoškola si vybudovala pověst seriózní firmy s profesionálním a
          vstřícným přístupem k uchazečům o řidičské oprávnění.
        </p>
        <p className="lead-text">
          Zajišťujeme výuku všech znalostí a dovedností, které jsou pro získání
          řidičského průkazu potřeba. Ve výcviku se vám budou věnovat učitelé s
          nadšením a s klidným přístupem k výuce.
        </p>

        <div className="offer-row">
          <span>Řidičská oprávnění skupin B, A1, A2, A</span>
          <span>Intenzivní kurzy</span>
          <span>Kondiční jízdy</span>
          <span>Školení řidičů</span>
          <span>Možnost splátek</span>
        </div>
      </section>

      <PageIntro eyebrow="Rychlé odkazy" title="Co u nás najdete">
        <div className="services-grid">
          {serviceCards.map((service) => (
            <Link
              key={service.slug}
              className="service-tile"
              to={`/sluzby/${service.slug}`}
            >
              <span className="service-badge">{service.badge}</span>
              <strong>{service.title}</strong>
            </Link>
          ))}
        </div>
      </PageIntro>
    </>
  )
}
