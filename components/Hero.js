'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section 
      className="hero" 
      id="hero"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('/images/Cover Shot.png')`
      }}
    >
      <div className="hero-content">
        <p className="hero-subtitle">Peer Luxury Real Estate Presents:</p>
        <h1 className="hero-title">
          <span className="word">PARK</span>
          <span className="word">BAVLI</span>
        </h1>
        <h2 className="hero-city">
          <span className="word">TEL</span>
          <span className="word">AVIV</span>
        </h2>
      </div>
      <div className="hero-scroll">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
