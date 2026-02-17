import Link from 'next/link'
import Header from '@/components/Header'

export const metadata = {
  title: 'Privacy Policy | Park Bavli Tel Aviv',
  description: 'Privacy Policy for Park Bavli Tel Aviv website',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="policy-page">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: February 17, 2026</p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              PEER Luxury Real Estate and Plaza Tshuva Group ("we", "our", or "us") operates the Park Bavli Tel Aviv website. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Any messages or inquiries you submit through our contact form</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect certain information about your device, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages you visit and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
            </ul>
          </section>

          <section>
            <h2>3. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our website and store certain information.</p>
            
            <h3>3.1 Types of Cookies We Use</h3>
            <ul>
              <li><strong>Necessary Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (Google Analytics, Facebook Pixel).</li>
              <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for marketing and advertising purposes.</li>
            </ul>

            <h3>3.2 Third-Party Services</h3>
            <p>We use the following third-party services that may set cookies:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Facebook Pixel:</strong> For advertising and retargeting purposes</li>
              <li><strong>Zapier:</strong> For processing contact form submissions</li>
            </ul>
          </section>

          <section>
            <h2>4. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you information about our properties and services</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our website (hosting, analytics, email services)</li>
              <li><strong>Business Partners:</strong> When necessary for providing services you requested</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for cookies (except necessary cookies)</li>
            </ul>
          </section>

          <section>
            <h2>7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2>8. Contact Information</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="contact-info">
              <p><strong>PEER Luxury Real Estate</strong></p>
              <p><strong>Delilah Schwartz:</strong> <a href="tel:+972543328733">+972-54-332-8733</a></p>
              <p><strong>Dror Peer:</strong> <a href="tel:+972524000407">+972-52-400-0407</a></p>
              <p><strong>Email:</strong> <a href="mailto:Peer.lre@gmail.com">Peer.lre@gmail.com</a></p>
            </div>
          </section>

          <section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <div className="policy-footer">
            <Link href="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}
