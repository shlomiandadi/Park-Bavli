'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-peer">
        <Image
          src="/images/park-bavli-logo.png"
          alt="Park Bavli Logo"
          width={200}
          height={60}
          className="header-logo-img"
          priority
        />
      </div>
      <div className="logo-plaza">
        <div>Plaza Tshuva</div>
        <div className="group">Group</div>
      </div>
    </header>
  )
}
