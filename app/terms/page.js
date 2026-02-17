import Link from 'next/link'
import Header from '@/components/Header'

export const metadata = {
  title: 'Terms of Service | Park Bavli Tel Aviv',
  description: 'Terms of Service for Park Bavli Tel Aviv website',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="policy-page">
        <div className="container">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last Updated: February 17, 2026</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Park Bavli Tel Aviv website, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily access the materials on Park Bavli's website for personal, 
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2>3. Property Information</h2>
            <p>
              All property information, including but not limited to prices, availability, specifications, and images, 
              are subject to change without notice. We make every effort to ensure accuracy but do not warrant that 
              all information is current or complete.
            </p>
          </section>

          <section>
            <h2>4. User Submissions</h2>
            <p>
              By submitting information through our contact form, you grant us the right to use, reproduce, modify, 
              and distribute such information for the purpose of responding to your inquiry and providing our services.
            </p>
          </section>

          <section>
            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall PEER Luxury Real Estate, Plaza Tshuva Group, or their agents be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section>
            <h2>6. Links to Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content or 
              privacy practices of these external sites.
            </p>
          </section>

          <section>
            <h2>7. Modifications</h2>
            <p>
              We reserve the right to revise these terms of service at any time without notice. By using this website, 
              you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Israel, and you 
              irrevocably submit to the exclusive jurisdiction of the courts in Tel Aviv, Israel.
            </p>
          </section>

          <section>
            <h2>9. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
            <div className="contact-info">
              <p><strong>PEER Luxury Real Estate</strong></p>
              <p><strong>Delilah Schwartz:</strong> <a href="tel:+972543328733">+972-54-332-8733</a></p>
              <p><strong>Dror Peer:</strong> <a href="tel:+972524000407">+972-52-400-0407</a></p>
              <p><strong>Email:</strong> <a href="mailto:Peer.lre@gmail.com">Peer.lre@gmail.com</a></p>
            </div>
          </section>

          <div className="policy-footer">
            <Link href="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}
