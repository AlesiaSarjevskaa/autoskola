import { useState } from "react"
import PageIntro from "../shared/PageIntro"

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  course: "B - Osobní automobily",
  message: "",
  consent: false,
}

const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000"

export default function ApplicationPage() {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState({ type: "", message: "" })

  function handleChange(event) {
    const { name, value, type, checked } = event.target

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitState({ type: "", message: "" })

    try {
      const response = await fetch(`${apiBaseUrl}/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Odeslání se nepodařilo.")
      }

      setSubmitState({
        type: "success",
        message: result.message || "Přihláška byla úspěšně odeslána.",
      })
      setFormData(initialForm)
    } catch (error) {
      setSubmitState({
        type: "error",
        message: error.message || "Přihlášku se nepodařilo odeslat.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageIntro
      eyebrow="Přihláška"
      title="Začněte jednoduše"
      note="Odeslání přímo do databáze"
    >
      <p className="lead-text">
        Vyplňte základní údaje, vyberte kurz a odešlete přihlášku. Data se uloží
        přímo do databáze autoškoly.
      </p>

      <form className="application-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="form-field">
            <span>Jméno</span>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-field">
            <span>Příjmení</span>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-field">
            <span>E-mail</span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-field">
            <span>Telefon</span>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-field form-field-full">
            <span>Vybraný kurz</span>
            <select name="course" value={formData.course} onChange={handleChange}>
              <option>B - Osobní automobily</option>
              <option>A1 - Malé motocykly</option>
              <option>A2 - Větší motocykly</option>
              <option>A - Motocykly bez omezení</option>
              <option>Kondiční jízdy</option>
              <option>Školení řidičů</option>
            </select>
          </label>

          <label className="form-field form-field-full">
            <span>Zpráva</span>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sem můžete napsat poznámku nebo dotaz."
            />
          </label>
        </div>

        <label className="checkbox-field">
          <input
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          <span>Souhlasím se zpracováním údajů za účelem vyřízení přihlášky.</span>
        </label>

        {submitState.message ? (
          <p className={`form-message form-message-${submitState.type}`}>
            {submitState.message}
          </p>
        ) : null}

        <div className="signup-actions">
          <button className="primary-button button-reset" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Odesílám..." : "Odeslat přihlášku"}
          </button>
          <a className="secondary-button" href="tel:+420737286495">
            Zavolat pro info
          </a>
        </div>
      </form>
    </PageIntro>
  )
}
