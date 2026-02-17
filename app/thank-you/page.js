'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const [name, setName] = useState('')

  useEffect(() => {
    // Get name from URL params
    const nameParam = searchParams.get('name')
    if (nameParam) {
      setName(decodeURIComponent(nameParam))
    } else {
      // If no name in URL, try to get from sessionStorage
      if (typeof window !== 'undefined') {
        const storedName = sessionStorage.getItem('formSubmissionName')
        if (storedName) {
          setName(storedName)
          sessionStorage.removeItem('formSubmissionName')
        }
      }
    }
  }, [searchParams])

  return (
    <>
      <Header />
      <div className="thank-you-page">
        <div className="container">
          <div className="thank-you-content">
            <div className="thank-you-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" className="check-circle"/>
                <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-mark"/>
              </svg>
            </div>
            
            <h1>Thank You{name ? `, ${name}` : ''}!</h1>
            
            <p className="thank-you-message">
              Your inquiry has been received successfully. Our team will contact you shortly to discuss 
              your interest in Park Bavli Tel Aviv.
            </p>

            <div className="thank-you-details">
              <p>We appreciate your interest in our luxury real estate project.</p>
              <p>You can expect to hear from us within 24-48 hours.</p>
            </div>

            <div className="thank-you-actions">
              <Link href="/" className="btn-primary">
                Return to Home
              </Link>
              <Link href="/#contact" className="btn-secondary">
                Submit Another Inquiry
              </Link>
            </div>

            <div className="thank-you-contact">
              <p>Need immediate assistance?</p>
              <div className="contact-info">
                <p><strong>Delilah Schwartz:</strong> <a href="tel:+972543328733">+972-54-332-8733</a></p>
                <p><strong>Dror Peer:</strong> <a href="tel:+972524000407">+972-52-400-0407</a></p>
                <p><strong>Email:</strong> <a href="mailto:Peer.lre@gmail.com">Peer.lre@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="thank-you-page">
        <div className="container">
          <div className="thank-you-content">
            <h1>Thank You!</h1>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}
