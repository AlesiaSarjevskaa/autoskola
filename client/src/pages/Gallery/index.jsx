import PageIntro from "../shared/PageIntro"
import { galleryImages } from "../../data/siteContent"

export default function GalleryPage() {
  return (
    <PageIntro
      eyebrow="Náhled atmosféry autoškoly"
      title="Fotogalerie"
    >
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <figure key={image.src} className="gallery-card">
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.alt}</figcaption>
          </figure>
        ))}
      </div>
    </PageIntro>
  )
}
