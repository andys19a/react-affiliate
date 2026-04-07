'use client'

import { useState } from 'react'

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact-page">
      <h1>Kontakta mig</h1>
      {!isSubmitted ? (
        <>
          <p>
            Om du har några frågor eller vill komma i kontakt med mig, tveka inte
            att skicka ett meddelande!
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Namn:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">E-post:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Meddelande:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Skicka</button>
          </form>
        </>
      ) : (
        <div className="thank-you">
          <h2>Tack för ditt meddelande!</h2>
          <p>Jag återkommer till dig så snart som möjligt.</p>
          <button onClick={() => setIsSubmitted(false)}>Skicka ett till</button>
        </div>
      )}
    </div>
  )
}
