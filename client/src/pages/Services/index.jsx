import { Link } from "react-router-dom"
import PageIntro from "../shared/PageIntro"
import { serviceCards } from "../../data/siteContent"

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Služby"
        title="Vyberte si, co právě potřebujete"
        note="Každé tlačítko má vlastní stránku"
      >
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

      <section className="service-details">
        {serviceCards.map((service) => (
          <article key={service.slug} className="detail-card">
            <p className="detail-badge">{service.badge}</p>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <Link className="detail-link" to={`/sluzby/${service.slug}`}>
              Otevřít detail služby
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}
