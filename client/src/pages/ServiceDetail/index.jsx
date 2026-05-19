import { Link, Navigate, useParams } from "react-router-dom"
import PageIntro from "../shared/PageIntro"
import { serviceCards } from "../../data/siteContent"

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = serviceCards.find((item) => item.slug === slug)

  if (!service) {
    return <Navigate to="/sluzby" replace />
  }

  return (
    <>
      <PageIntro
        eyebrow={`Služba ${service.badge}`}
        title={service.title}
      >
        <p className="lead-text">{service.text}</p>
        <div className="hero-actions">
          <Link className="primary-button" to="/prihlaska">
            Mám zájem
          </Link>
          <Link className="secondary-button" to="/sluzby">
            Zpět na služby
          </Link>
        </div>
      </PageIntro>
    </>
  )
}
