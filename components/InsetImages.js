'use client'

import Image from 'next/image'

export default function InsetImages() {
  return (
    <section className="insets-wrap">
      <div className="container">
        <div className="insets-grid">
          <div className="inset-card">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                src="/images/park-bavli-2.JPG"
                alt="Modern bathroom"
                fill
                className="inset-image"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="inset-card">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                src="/images/park-bavli-3.JPG"
                alt="Swimming pool and outdoor area"
                fill
                className="inset-image"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="inset-card">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                src="/images/park-bavli-1.JPG"
                alt="Luxury living room with ocean view"
                fill
                className="inset-image"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
