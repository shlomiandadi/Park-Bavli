'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LiaUniversalAccessSolid } from 'react-icons/lia'

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState({
    fontSize: 100, // percentage
    contrast: 'normal', // normal, high, dark
    readingGuide: false,
    keyboardNav: false,
  })

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings')
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        setSettings(parsed)
        applySettings(parsed)
      } catch (e) {
        console.error('Error loading accessibility settings:', e)
      }
    }
  }, [])

  // Apply accessibility settings to the page
  const applySettings = (newSettings) => {
    const root = document.documentElement
    
    // Font size
    root.style.fontSize = `${newSettings.fontSize}%`
    
    // Contrast mode
    document.body.classList.remove('high-contrast', 'dark-mode')
    if (newSettings.contrast === 'high') {
      document.body.classList.add('high-contrast')
    } else if (newSettings.contrast === 'dark') {
      document.body.classList.add('dark-mode')
    }
    
    // Reading guide
    if (newSettings.readingGuide) {
      document.body.classList.add('reading-guide')
    } else {
      document.body.classList.remove('reading-guide')
    }
    
    // Keyboard navigation enhancement
    if (newSettings.keyboardNav) {
      document.body.classList.add('keyboard-nav-enhanced')
    } else {
      document.body.classList.remove('keyboard-nav-enhanced')
    }
  }

  // Save settings to localStorage
  const saveSettings = (newSettings) => {
    setSettings(newSettings)
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings))
    applySettings(newSettings)
  }

  // Font size controls
  const increaseFontSize = () => {
    const newSize = Math.min(settings.fontSize + 10, 200)
    saveSettings({ ...settings, fontSize: newSize })
  }

  const decreaseFontSize = () => {
    const newSize = Math.max(settings.fontSize - 10, 70)
    saveSettings({ ...settings, fontSize: newSize })
  }

  const resetFontSize = () => {
    saveSettings({ ...settings, fontSize: 100 })
  }

  // Contrast controls
  const setContrast = (mode) => {
    saveSettings({ ...settings, contrast: mode })
  }

  // Reading guide toggle
  const toggleReadingGuide = () => {
    saveSettings({ ...settings, readingGuide: !settings.readingGuide })
  }

  // Keyboard navigation toggle
  const toggleKeyboardNav = () => {
    saveSettings({ ...settings, keyboardNav: !settings.keyboardNav })
  }

  // Stop animations
  const stopAnimations = () => {
    const style = document.createElement('style')
    style.id = 'disable-animations'
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `
    document.head.appendChild(style)
    saveSettings({ ...settings, animationsDisabled: true })
  }

  // Enable animations
  const enableAnimations = () => {
    const style = document.getElementById('disable-animations')
    if (style) {
      style.remove()
    }
    saveSettings({ ...settings, animationsDisabled: false })
  }

  // Reset all settings
  const resetAll = () => {
    const defaultSettings = {
      fontSize: 100,
      contrast: 'normal',
      readingGuide: false,
      keyboardNav: false,
      animationsDisabled: false,
    }
    saveSettings(defaultSettings)
    const style = document.getElementById('disable-animations')
    if (style) {
      style.remove()
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // ESC to close widget
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Apply settings on mount and when settings change
  useEffect(() => {
    applySettings(settings)
  }, [])

  return (
    <>
      {/* Floating Button */}
      <button
        className="accessibility-widget-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open accessibility menu"
        aria-expanded={isOpen}
        title="Accessibility Options"
      >
        <LiaUniversalAccessSolid />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="accessibility-panel" role="dialog" aria-label="Accessibility Options">
          <div className="accessibility-panel-header">
            <h2>Accessibility Options</h2>
            <button
              className="accessibility-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility menu"
            >
              ×
            </button>
          </div>

          <div className="accessibility-panel-content">
            {/* Font Size */}
            <div className="accessibility-section">
              <h3>Text Size</h3>
              <div className="accessibility-controls">
                <button
                  onClick={decreaseFontSize}
                  aria-label="Decrease font size"
                  className="accessibility-btn"
                >
                  A−
                </button>
                <span className="accessibility-value">{settings.fontSize}%</span>
                <button
                  onClick={increaseFontSize}
                  aria-label="Increase font size"
                  className="accessibility-btn"
                >
                  A+
                </button>
                <button
                  onClick={resetFontSize}
                  className="accessibility-btn-reset"
                  aria-label="Reset font size"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Contrast */}
            <div className="accessibility-section">
              <h3>Contrast</h3>
              <div className="accessibility-controls">
                <button
                  onClick={() => setContrast('normal')}
                  className={`accessibility-btn ${settings.contrast === 'normal' ? 'active' : ''}`}
                  aria-label="Normal contrast"
                >
                  Normal
                </button>
                <button
                  onClick={() => setContrast('high')}
                  className={`accessibility-btn ${settings.contrast === 'high' ? 'active' : ''}`}
                  aria-label="High contrast"
                >
                  High
                </button>
                <button
                  onClick={() => setContrast('dark')}
                  className={`accessibility-btn ${settings.contrast === 'dark' ? 'active' : ''}`}
                  aria-label="Dark mode"
                >
                  Dark
                </button>
              </div>
            </div>

            {/* Reading Guide */}
            <div className="accessibility-section">
              <h3>Reading Guide</h3>
              <button
                onClick={toggleReadingGuide}
                className={`accessibility-toggle ${settings.readingGuide ? 'active' : ''}`}
                aria-pressed={settings.readingGuide}
              >
                {settings.readingGuide ? 'On' : 'Off'}
              </button>
            </div>

            {/* Keyboard Navigation */}
            <div className="accessibility-section">
              <h3>Keyboard Navigation</h3>
              <button
                onClick={toggleKeyboardNav}
                className={`accessibility-toggle ${settings.keyboardNav ? 'active' : ''}`}
                aria-pressed={settings.keyboardNav}
              >
                {settings.keyboardNav ? 'On' : 'Off'}
              </button>
            </div>

            {/* Animations */}
            <div className="accessibility-section">
              <h3>Animations</h3>
              <button
                onClick={settings.animationsDisabled ? enableAnimations : stopAnimations}
                className={`accessibility-toggle ${settings.animationsDisabled ? 'active' : ''}`}
                aria-pressed={settings.animationsDisabled}
              >
                {settings.animationsDisabled ? 'Disabled' : 'Enabled'}
              </button>
            </div>

            {/* Reset All */}
            <div className="accessibility-section">
              <button
                onClick={resetAll}
                className="accessibility-btn-reset-all"
                aria-label="Reset all accessibility settings"
              >
                Reset All Settings
              </button>
            </div>

            {/* Accessibility Statement Link */}
            <div className="accessibility-section">
              <Link
                href="/accessibility"
                className="accessibility-statement-link"
                onClick={() => setIsOpen(false)}
              >
                Accessibility Statement
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="accessibility-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
