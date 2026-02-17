'use client'

import { useEffect } from 'react'

export function useScrollAnimations() {
  useEffect(() => {
    const animated = document.querySelectorAll('.animate-on-scroll')
    if (!animated.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    animated.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      animated.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])
}

export function useParallax() {
  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return

    if (window.matchMedia('(max-width: 768px)').matches) {
      return
    }

    hero.classList.add('parallax-enabled')

    const handleScroll = () => {
      const scrolled = window.scrollY
      const rate = scrolled * 0.35
      hero.style.backgroundPositionY = rate + 'px'
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export function useInsetAnimations() {
  useEffect(() => {
    const cards = document.querySelectorAll('.inset-card')
    if (!cards.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.2 }
    )

    cards.forEach((card, i) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(30px)'
      card.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`
      observer.observe(card)
    })

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])
}
