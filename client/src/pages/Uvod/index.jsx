import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const homeServices = [
  { slug: "osobni-automobily", badge: "B", title: "Osobní vozy", sub: "Skupina B" },
  { slug: "male-motocykly", badge: "A1", title: "Lehké moto", sub: "do 125 ccm" },
  { slug: "vetsi-motocykly", badge: "A2", title: "Střední moto", sub: "do 35 kW" },
  { slug: "motocykly-bez-omezeni", badge: "A", title: "Moto bez omezení", sub: "Skupina A" },
  { slug: "kondicni-jizdy", badge: "Kondiční jízdy", title: "Kondiční jízdy", sub: "Získejte jistotu" },
  { slug: "skoleni-ridicu", badge: "Školení řidičů", title: "Školení", sub: "Referenti" },
]

const searchItems = [
  { path: "/", terms: ["uvod", "vitejte", "autoskola", "domu"] },
  { path: "/o-nas", terms: ["o nas", "onas", "informace", "autoskola jiracek"] },
  { path: "/sluzby", terms: ["sluzby", "nabidka", "kurzy", "vycvik"] },
  { path: "/fotografie", terms: ["fotografie", "foto", "galerie", "fotogalerie"] },
  { path: "/kontakt", terms: ["kontakt", "kontakty", "telefon", "email", "adresa"] },
  { path: "/cenik", terms: ["cenik", "cena", "ceny", "kolik", "platba"] },
  { path: "/prihlaska", terms: ["prihlaska", "prihlasit", "formular", "zapsat"] },
  { path: "/novinky", terms: ["novinky", "kurz", "termin", "terminy"] },
  {
    path: "/sluzby/osobni-automobily",
    terms: ["b", "skupina b", "osobni", "auto", "automobil", "osobni vozy"],
  },
  {
    path: "/sluzby/male-motocykly",
    terms: ["a1", "skupina a1", "lehke moto", "125", "motocykl 125"],
  },
  {
    path: "/sluzby/vetsi-motocykly",
    terms: ["a2", "skupina a2", "stredni moto", "35 kw"],
  },
  {
    path: "/sluzby/motocykly-bez-omezeni",
    terms: ["a", "skupina a", "moto bez omezeni", "motocykl", "motorky"],
  },
  {
    path: "/sluzby/kondicni-jizdy",
    terms: ["kondicni", "kondicni jizdy", "jizdy", "ridit po pauze", "jistota"],
  },
  {
    path: "/sluzby/skoleni-ridicu",
    terms: ["skoleni", "skoleni ridicu", "referenti", "firma", "firemni"],
  },
]

function normalizeSearchText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
}

function findSearchResult(query) {
  const normalizedQuery = normalizeSearchText(query)

  if (!normalizedQuery) {
    return null
  }

  const queryWords = normalizedQuery.split(/\s+/)

  return searchItems
    .map((item) => {
      const score = item.terms.reduce((total, term) => {
        const normalizedTerm = normalizeSearchText(term)

        if (normalizedTerm === normalizedQuery) {
          return total + 100
        }

        if (normalizedTerm.includes(normalizedQuery)) {
          return total + 45
        }

        if (queryWords.every((word) => normalizedTerm.includes(word))) {
          return total + 25
        }

        return total
      }, 0)

      return { ...item, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)[0]
}

export default function UvodPage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchMessage, setSearchMessage] = useState("")

  function handleSearch(event) {
    event.preventDefault()

    const result = findSearchResult(searchQuery)

    if (!result) {
      setSearchMessage("Nic jsme nenašli.")
      return
    }

    setSearchMessage("")
    navigate(result.path)
  }

  return (
    <>
      <section className="hero-section hero-section-compact home-hero">
        <div className="hero-overlay" />
        <div className="hero-content home-hero-content">
          <h1>
            Naučíme vás řídit <br />
            <span>bezpečně a sebejistě.</span>
          </h1>
          <form className="hero-search" role="search" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Co hledáte? (např. kondiční jízdy)"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button type="submit">Hledat</button>
          </form>
          {searchMessage ? <p className="search-message">{searchMessage}</p> : null}
        </div>
      </section>

      <section className="welcome-card welcome-card-modern">
        <div className="welcome-header">
          <div>
            <h2>VÍTEJTE</h2>
            <p>Mnichovo Hradiště & okolí</p>
          </div>
          <Link className="primary-button welcome-cta" to="/prihlaska">
            Přihláška
          </Link>
        </div>

        <p className="lead-text welcome-lead">
          Vaše cesta k řidičskému průkazu začíná u nás.
        </p>
        <p className="lead-text">
          Klademe důraz na individuální přístup a klidnou atmosféru. Žádný stres,
          jen profesionální výcvik v Mnichově Hradišti a okolí.
        </p>

        <div className="offer-row">
          <span>Skupiny B, A1, A2, A</span>
          <span>Intenzivní výcvik</span>
          <span>Kondiční jízdy</span>
          <span>Školení řidičů</span>
        </div>
      </section>

      <section className="info-section home-services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Rychlé odkazy</p>
            <h2>Co u nás najdete</h2>
          </div>
        </div>
        <div className="services-grid">
          {homeServices.map((service) => (
            <Link
              key={service.slug}
              className="service-tile"
              to={`/sluzby/${service.slug}`}
            >
              <span className="service-badge">{service.badge}</span>
              <strong>{service.title}</strong>
              <span>{service.sub}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="info-section location-map-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Kde nás najdete</p>
            <h2>Mapa</h2>
          </div>
          <p className="heading-note">Jaselská 1173, 295 01 Mnichovo Hradiště</p>
        </div>

        <div className="map-frame">
          <iframe
            title="Mapa Autoškoly Jiráček"
            src="https://maps.google.com/maps?q=Jaselsk%C3%A1%201173%2C%20295%2001%20Mnichovo%20Hradi%C5%A1t%C4%9B&t=&z=16&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
