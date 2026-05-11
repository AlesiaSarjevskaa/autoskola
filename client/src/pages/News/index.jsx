import PageIntro from "../shared/PageIntro"
import { newsItems } from "../../data/siteContent"

export default function NewsPage() {
  return (
    <PageIntro
      title="Novinky"
    >
      <div className="news-list">
        {newsItems.map((item) => (
          <article key={item.slug} className="news-card">
            <p className="news-date">{item.date}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </PageIntro>
  )
}
