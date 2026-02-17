'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Wait for loader to finish before showing consent banner
    const checkLoader = () => {
      if (typeof document === 'undefined') return
      
      const loader = document.getElementById('loader')
      const bodyLoading = document.body.classList.contains('loading')
      const loaderHidden = loader?.classList.contains('hidden')
      
      // If loader doesn't exist, is hidden, or body doesn't have loading class, show banner
      if (!loader || loaderHidden || !bodyLoading) {
        // Check if consent was already given
        const savedConsent = localStorage.getItem('cookieConsent')
        if (!savedConsent) {
          setShowBanner(true)
        } else {
          try {
            const parsed = JSON.parse(savedConsent)
            setConsent(parsed)
          } catch (e) {
            // If parsing fails, show banner
            setShowBanner(true)
          }
        }
      } else {
        // Check again after a short delay
        setTimeout(checkLoader, 200)
      }
    }

    // Start checking after initial delay (loader takes 2 seconds + 0.6s transition)
    const timer = setTimeout(checkLoader, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent))
    setConsent(newConsent)
    setShowBanner(false)
    window.location.reload() // Reload to load scripts
  }

  const handleRejectAll = () => {
    const newConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent))
    setConsent(newConsent)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    const newConsent = {
      ...consent,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent))
    setShowBanner(false)
    window.location.reload()
  }

  const toggleSetting = (key) => {
    if (key === 'necessary') return // Cannot disable necessary cookies
    setConsent(prev => ({ ...prev, [key]: !prev[key] }))
  }

  if (!showBanner) return null

  return (
    <>
      <div className="consent-overlay" onClick={() => setShowBanner(false)}></div>
      <div className="consent-banner">
        <div className="consent-content">
          <h3>Cookie Consent</h3>
          <p>
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
            By clicking "Accept All", you consent to our use of cookies. You can also choose to customize your preferences.
          </p>
          
          {showSettings && (
            <div className="consent-settings">
              <div className="consent-setting">
                <label>
                  <input 
                    type="checkbox" 
                    checked={consent.necessary} 
                    disabled
                  />
                  <span>Necessary Cookies <span className="required">(Required)</span></span>
                </label>
                <p className="setting-desc">Essential for the website to function properly.</p>
              </div>
              
              <div className="consent-setting">
                <label>
                  <input 
                    type="checkbox" 
                    checked={consent.analytics} 
                    onChange={() => toggleSetting('analytics')}
                  />
                  <span>Analytics Cookies</span>
                </label>
                <p className="setting-desc">Help us understand how visitors interact with our website (Google Analytics, Pixel).</p>
              </div>
              
              <div className="consent-setting">
                <label>
                  <input 
                    type="checkbox" 
                    checked={consent.marketing} 
                    onChange={() => toggleSetting('marketing')}
                  />
                  <span>Marketing Cookies</span>
                </label>
                <p className="setting-desc">Used to track visitors across websites for marketing purposes.</p>
              </div>
            </div>
          )}

          <div className="consent-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms of Service</Link>
          </div>

          <div className="consent-buttons">
            {showSettings ? (
              <>
                <button onClick={() => setShowSettings(false)} className="btn-secondary">
                  Cancel
                </button>
                <button onClick={handleSavePreferences} className="btn-primary">
                  Save Preferences
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setShowSettings(true)} className="btn-secondary">
                  Customize
                </button>
                <button onClick={handleRejectAll} className="btn-secondary">
                  Reject All
                </button>
                <button onClick={handleAcceptAll} className="btn-primary">
                  Accept All
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
