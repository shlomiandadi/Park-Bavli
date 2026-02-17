import Link from 'next/link'
import Header from '@/components/Header'

export const metadata = {
  title: 'Accessibility Statement | Park Bavli Tel Aviv',
  description: 'Accessibility statement for Park Bavli Tel Aviv website',
}

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <div className="policy-page">
        <div className="container">
          <h1>Accessibility Statement</h1>
          <p className="last-updated">Last Updated: February 17, 2026</p>

          <section>
            <h2>1. Commitment to Accessibility</h2>
            <p>
              PEER Luxury Real Estate and Plaza Tshuva Group are committed to ensuring digital accessibility 
              for people with disabilities. We are continually improving the user experience for everyone 
              and applying the relevant accessibility standards to achieve these goals.
            </p>
          </section>

          <section>
            <h2>2. Accessibility Standards</h2>
            <p>
              This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. 
              These guidelines explain how to make web content more accessible for people with disabilities, 
              and user-friendly for everyone.
            </p>
            <p>
              The guidelines have three levels of accessibility (A, AA, and AAA). We have chosen Level AA as 
              our target for this website.
            </p>
          </section>

          <section>
            <h2>3. Current Accessibility Status</h2>
            <p>
              We have implemented the following accessibility features on this website:
            </p>
            <ul>
              <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed using keyboard navigation</li>
              <li><strong>Alt Text:</strong> Images include descriptive alt text for screen readers</li>
              <li><strong>Color Contrast:</strong> Text and background colors meet WCAG 2.1 Level AA contrast requirements</li>
              <li><strong>Semantic HTML:</strong> Proper heading hierarchy and semantic HTML elements are used throughout</li>
              <li><strong>Form Labels:</strong> All form inputs have associated labels</li>
              <li><strong>Focus Indicators:</strong> Visible focus indicators for keyboard navigation</li>
              <li><strong>Responsive Design:</strong> Website is accessible on various screen sizes and devices</li>
              <li><strong>Text Resizing:</strong> Text can be resized up to 200% without loss of functionality</li>
              <li><strong>Skip Links:</strong> Skip navigation links for easier keyboard navigation</li>
              <li><strong>ARIA Labels:</strong> ARIA labels used where appropriate to enhance screen reader experience</li>
            </ul>
          </section>

          <section>
            <h2>4. Known Limitations</h2>
            <p>
              Despite our best efforts to ensure accessibility, there may be some limitations. Below is a 
              description of known limitations, and potential solutions. Please contact us if you observe 
              an issue not listed below.
            </p>
            <ul>
              <li>Some third-party content or widgets may not be fully accessible</li>
              <li>Older PDF documents may not be fully accessible to screen reader software</li>
              <li>Some video content may lack captions or transcripts</li>
              <li>Some complex visual elements may require alternative text descriptions</li>
            </ul>
            <p>
              We are working to address these limitations and improve accessibility across the site.
            </p>
          </section>

          <section>
            <h2>5. Feedback and Contact</h2>
            <p>
              We welcome your feedback on the accessibility of the Park Bavli Tel Aviv website. If you 
              encounter accessibility barriers, please let us know:
            </p>
            <div className="contact-info">
              <p><strong>Accessibility Coordinator</strong></p>
              <p><strong>PEER Luxury Real Estate</strong></p>
              <p><strong>Email:</strong> <a href="mailto:Peer.lre@gmail.com">Peer.lre@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+972543328733">+972-54-332-8733</a> (Delilah Schwartz)</p>
              <p><strong>Phone:</strong> <a href="tel:+972524000407">+972-52-400-0407</a> (Dror Peer)</p>
            </div>
            <p>
              We aim to respond to accessibility feedback within 5 business days.
            </p>
          </section>

          <section>
            <h2>6. Accessibility Testing</h2>
            <p>
              This website has been tested using the following tools and methods:
            </p>
            <ul>
              <li>Automated accessibility testing tools (WAVE, axe DevTools)</li>
              <li>Manual keyboard navigation testing</li>
              <li>Screen reader testing (NVDA, JAWS, VoiceOver)</li>
              <li>Browser compatibility testing (Chrome, Firefox, Safari, Edge)</li>
              <li>Mobile device testing</li>
            </ul>
          </section>

          <section>
            <h2>7. Third-Party Content</h2>
            <p>
              Some content on our website may be provided by third parties. We cannot guarantee the 
              accessibility of third-party content, but we work with our partners to ensure accessibility 
              standards are met where possible.
            </p>
          </section>

          <section>
            <h2>8. Ongoing Improvements</h2>
            <p>
              We are committed to continuously improving the accessibility of our website. We regularly 
              review and update our content to ensure compliance with accessibility standards. This 
              accessibility statement will be reviewed and updated as needed.
            </p>
          </section>

          <section>
            <h2>9. Enforcement Procedure</h2>
            <p>
              If you are not satisfied with our response to your accessibility concern, you may file a 
              complaint with the relevant accessibility authority in your jurisdiction.
            </p>
            <p>
              In Israel, you may contact the Commission for Equal Rights of Persons with Disabilities at 
              the Ministry of Justice.
            </p>
          </section>

          <section>
            <h2>10. Additional Resources</h2>
            <p>For more information about web accessibility, please visit:</p>
            <ul>
              <li><a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">Web Accessibility Initiative (WAI)</a></li>
              <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">WCAG 2.1 Quick Reference</a></li>
              <li><a href="https://www.accessibility.org.il/" target="_blank" rel="noopener noreferrer">Israel Accessibility Association</a></li>
            </ul>
          </section>

          <div className="policy-footer">
            <Link href="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}
