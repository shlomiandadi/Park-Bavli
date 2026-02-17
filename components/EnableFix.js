'use client'

import { useEffect } from 'react'

export default function EnableFix() {
  useEffect(() => {
    // Function to fix enable.co.il popup colors
    const fixEnablePopup = () => {
      // Find all enable elements
      const enableElements = document.querySelectorAll('[class*="enable"], [id*="enable"], [class*="Enable"], [id*="Enable"]')
      
      enableElements.forEach((element) => {
        // Skip icon elements
        if (element.classList.contains('icon') || element.id.includes('icon')) {
          return
        }

        // Fix white backgrounds
        const style = window.getComputedStyle(element)
        const bgColor = style.backgroundColor
        if (bgColor === 'rgb(255, 255, 255)' || bgColor === 'white' || element.style.backgroundColor === 'white' || element.style.backgroundColor === '#fff' || element.style.backgroundColor === '#ffffff') {
          element.style.backgroundColor = '#15171a'
          element.style.background = '#15171a'
        }

        // Fix white text in all children
        const allChildren = element.querySelectorAll('*')
        allChildren.forEach((child) => {
          const childStyle = window.getComputedStyle(child)
          const textColor = childStyle.color
          if (textColor === 'rgb(255, 255, 255)' || textColor === 'white' || child.style.color === 'white' || child.style.color === '#fff' || child.style.color === '#ffffff') {
            child.style.color = '#ffffff'
          }
        })

        // Fix ESC text specifically
        const textNodes = []
        const walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          null,
          false
        )
        
        let node
        while (node = walker.nextNode()) {
          if (node.textContent.includes('ESC')) {
            const parent = node.parentElement
            if (parent) {
              parent.style.color = '#ffffff'
              const parentStyle = window.getComputedStyle(parent)
              if (parentStyle.backgroundColor === 'rgb(255, 255, 255)' || parentStyle.backgroundColor === 'white') {
                parent.style.backgroundColor = 'transparent'
              }
            }
          }
        }
      })
    }

    // Run immediately
    fixEnablePopup()

    // Watch for new enable elements being added
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
    const interval = setInterval(fixEnablePopup, 500)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  return null
}
