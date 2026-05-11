import PageIntro from "../shared/PageIntro"
import { contactInfo } from "../../data/siteContent"

export default function ContactPage() {
  return (
    <PageIntro
      eyebrow="Kontakt"
      title="Spojte se s námi"
      note="Autoškola Jiří Jiráček"
    >
      <div className="contact-card">
        <p>{contactInfo.address}</p>
        <a href={`tel:${contactInfo.phone.replaceAll(" ", "")}`}>{contactInfo.phone}</a>
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        <p>IČ: {contactInfo.ico}</p>
      </div>
    </PageIntro>
  )
}
