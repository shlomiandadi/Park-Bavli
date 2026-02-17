'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ContactForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [privacyConsent, setPrivacyConsent] = useState(true) // Checked by default
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const webhookUrl = 'https://hooks.zapier.com/hooks/catch/8389196/ucu0s0b/'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email) {
      setStatus({ type: 'error', message: 'Please fill in name and email.' })
      return
    }

    if (!privacyConsent) {
      setStatus({ type: 'error', message: 'Please accept the Privacy Policy to continue.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message || 'No message',
      privacyConsent: privacyConsent,
      timestamp: new Date().toISOString(),
      source: 'Park Bavli Website'
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      })

      // Store name in sessionStorage as backup
      if (formData.name) {
        sessionStorage.setItem('formSubmissionName', formData.name)
      }

      // Redirect to thank you page with name parameter
      const encodedName = encodeURIComponent(formData.name)
      router.push(`/thank-you?name=${encodedName}`)
    } catch (error) {
      console.error('Error:', error)
      setStatus({ type: 'error', message: 'Sorry, there was an error. Please try again or contact us directly.' })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="form-block animate-on-scroll delay-3">
      <h4>Inquire Now</h4>
      <form id="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <div className="privacy-checkbox">
          <label>
            <input
              type="checkbox"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              required
            />
            <span>
              I agree to the{' '}
              <Link href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Request'}
        </button>
        {status.message && (
          <div className={`form-message ${status.type}`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  )
}
