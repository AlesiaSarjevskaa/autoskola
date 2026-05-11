export default function PageIntro({ eyebrow, title, note, children }) {
  return (
    <section className="info-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        {note ? <p className="heading-note">{note}</p> : null}
      </div>
      {children}
    </section>
  )
}
