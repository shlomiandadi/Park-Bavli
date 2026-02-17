'use client'

import { useEffect } from 'react'

export default function EnableFix() {
  useEffect(() => {
    // Function to fix enable.co.il popup colors
    const fixEnablePopup = () => {
      // Find all enable elements - exclude icon
      const enableElements = document.querySelectorAll('[class*="enable"]:not([class*="icon"]), [id*="enable"]:not([id*="icon"]), [class*="Enable"]:not([class*="icon"])')
      
      enableElements.forEach((element) => {
        // Skip if it's the icon itself
        if (element.classList.contains('icon') || element.id.includes('icon') || element.querySelector('[class*="icon"]')) {
          return
        }

        // Fix white backgrounds - check inline style first, then computed
        const inlineBg = element.style.backgroundColor || element.style.background
        const computedBg = window.getComputedStyle(element).backgroundColor
        
        if (inlineBg && (inlineBg.includes('white') || inlineBg.includes('#fff') || inlineBg.includes('rgb(255'))) {
          element.style.backgroundColor = '#15171a'
          element.style.background = '#15171a'
        } else if (computedBg === 'rgb(255, 255, 255)' || computedBg === 'white') {
          element.style.backgroundColor = '#15171a'
          element.style.background = '#15171a'
        }

        // Fix all text elements - make them white
        const allTextElements = element.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, li, td, th, label')
        allTextElements.forEach((child) => {
          const inlineColor = child.style.color
          const computedColor = window.getComputedStyle(child).color
          
          // If white or very light, make it white on dark background
          if (inlineColor && (inlineColor.includes('white') || inlineColor.includes('#fff') || inlineColor.includes('rgb(255'))) {
            child.style.color = '#ffffff'
          } else if (computedColor === 'rgb(255, 255, 255)' || computedColor === 'white') {
            child.style.color = '#ffffff'
          }
          
          // Fix headings to gold
          if (child.tagName.match(/^H[1-6]$/)) {
            child.style.color = '#C5A059'
          }
        })

        // Fix ESC text specifically - search in text nodes
        const walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          null,
          false
        )
        
        let node
        while (node = walker.nextNode()) {
          if (node.textContent && node.textContent.trim().includes('ESC')) {
            const parent = node.parentElement
            if (parent) {
              parent.style.color = '#ffffff'
              const parentBg = window.getComputedStyle(parent).backgroundColor
              if (parentBg === 'rgb(255, 255, 255)' || parentBg === 'white') {
                parent.style.backgroundColor = 'transparent'
              }
            }
          }
        }

        // Fix buttons
        const buttons = element.querySelectorAll('button')
        buttons.forEach((btn) => {
          const btnBg = window.getComputedStyle(btn).backgroundColor
          if (btnBg === 'rgb(255, 255, 255)' || btnBg === 'white' || btn.style.backgroundColor === 'white' || btn.style.backgroundColor === '#fff') {
            btn.style.backgroundColor = '#C5A059'
            btn.style.color = '#0a0c0f'
          }
        })
      })
    }

    // Wait for enable script to load
    const checkEnableLoaded = setInterval(() => {
      if (window.enable || document.querySelector('[class*="enable"]')) {
        clearInterval(checkEnableLoaded)
        // Small delay to let enable initialize
        setTimeout(fixEnablePopup, 100)
      }
    }, 100)

    // Run immediately
    fixEnablePopup()

    // Watch for new enable elements being added (popups opening)
    const observer = new MutationObserver(() => {
      fixEnablePopup()
    })

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'id']
    })

    // Also run on interval as backup
    const interval = setInterval(fixEnablePopup, 300)

    return () => {
      clearInterval(checkEnableLoaded)
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  return null
}
