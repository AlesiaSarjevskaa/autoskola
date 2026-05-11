import PageIntro from "../shared/PageIntro"
import { priceItems } from "../../data/siteContent"

export default function PricingPage() {
  return (
    <PageIntro
      title="Ceník"
    >
      <div className="price-list">
        {priceItems.map((item) => (
          <div key={item.label} className="price-row">
            <span>{item.label}</span>
            <strong>{item.price}</strong>
          </div>
        ))}
      </div>
    </PageIntro>
  )
}
