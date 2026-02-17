'use client'

import { useEffect } from 'react'
import Loader from '@/components/Loader'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import InsetImages from '@/components/InsetImages'
import ContactForm from '@/components/ContactForm'
import { useScrollAnimations, useParallax, useInsetAnimations } from '@/components/Animations'
import ConsentBanner from '@/components/ConsentBanner'
import TrackingScripts from '@/components/TrackingScripts'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  useScrollAnimations()
  useParallax()
  useInsetAnimations()

  // Loading state is managed by Loader component

  return (
    <>
      <Loader />
      <ConsentBanner />
      <TrackingScripts />
      <Header />
      <Hero />
      <InsetImages />
      
      <section className="bottom-section">
        <div className="container">
          <div className="info-grid">
            <div className="description-block animate-on-scroll">
              <h3 className="section-heading">By the developers behind New York's Plaza International</h3>
              <p>A limited collection of luxury residences for sale with panoramic views, premium finishes and full service amenities, in a parkside oasis just minutes from Tel Aviv's cultural and business centres.</p>
              <div className="price">From $4.8 mil AUD</div>
            </div>
            <div className="animate-on-scroll delay-1">
              <h4 className="section-heading">Property Features:</h4>
              <ul className="features-list">
                <li>Staffed lobby & doorman</li>
                <li>Swimming pool, gym & sauna</li>
                <li>Residents' lounge & business centre</li>
                <li>Children's playroom</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-row">
            <div className="contact-block animate-on-scroll delay-2">
              <h4>Contact Us</h4>
              <div className="contact-cards">
                <div className="contact-card">
                  <img
                    className="avatar"
                    src="https://ui-avatars.com/api/?name=Delilah+Schwartz&background=C5A059&color=fff&size=56&bold=true&uppercase=true"
                    alt="Delilah Schwartz"
                    width={56}
                    height={56}
                  />
                  <div>
                    <p className="name">DELILAH SCHWARTZ</p>
                    <a href="tel:+972543328733" className="phone">+972-54-332-8733</a>
                  </div>
                </div>
                <div className="contact-card">
                  <img
                    className="avatar"
                    src="https://ui-avatars.com/api/?name=Dror+Peer&background=C5A059&color=fff&size=56&bold=true&uppercase=true"
                    alt="Dror Peer"
                    width={56}
                    height={56}
                  />
                  <div>
                    <p className="name">DROR PEER</p>
                    <a href="tel:+972524000407" className="phone">+972-52-400-0407</a>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 PEER Luxury Real Estate & Plaza Tshuva Group.</p>
          <div className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms of Service</Link>
            <span>|</span>
            <Link href="/accessibility">Accessibility Statement</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
