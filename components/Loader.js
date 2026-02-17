'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Loader() {
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Add loading class to body on mount
    document.body.classList.add('loading')
    
    // Hide loader after 2 seconds
    const fadeTimer = setTimeout(() => {
      const loaderElement = document.getElementById('loader')
      if (loaderElement) {
        loaderElement.classList.add('hidden')
      }
      document.body.classList.remove('loading')
      
      // Remove from DOM after transition completes
      setTimeout(() => {
        setShouldRender(false)
      }, 700) // Slightly longer than CSS transition
    }, 2000)

    return () => {
      clearTimeout(fadeTimer)
      document.body.classList.remove('loading')
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div 
      className="loader"
      id="loader"
    >
      <div className="loader-content">
        <div className="loader-logo">
          <Image
            src="/images/park-bavli-logo.png"
            alt="Park Bavli Logo"
            width={400}
            height={200}
            className="loader-logo-img"
            priority
          />
        </div>
        <div className="loader-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  )
}
