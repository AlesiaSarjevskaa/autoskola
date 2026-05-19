import { useEffect, useState } from "react"
import PageIntro from "../shared/PageIntro"
import { galleryImages } from "../../data/siteContent"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (!selectedImage) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedImage(null)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <PageIntro
        eyebrow="Náhled atmosféry autoškoly"
        title="Fotogalerie"
      >
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <figure key={image.src} className="gallery-card">
              <button
                className="gallery-image-button"
                type="button"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt} />
              </button>
              <figcaption>{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </PageIntro>

      {selectedImage ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Zavřít náhled"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <figure
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <figcaption>{selectedImage.alt}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}
