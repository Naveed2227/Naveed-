'use client'
import { useEffect, useRef } from 'react'

export default function AdBanner({ type = 'desktop' }) {
  const adContainerRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && adContainerRef.current) {
      adContainerRef.current.innerHTML = ''; 

      const isMobile = type === 'mobile'
      const adKey = isMobile ? '28165066' : '26985683759ed90ebd2497232a5046ba'
      
      const confScript = document.createElement('script')
      confScript.type = 'text/javascript'
      confScript.innerHTML = `
        atOptions = {
          'key' : '${adKey}',
          'format' : 'iframe',
          'height' : ${isMobile ? 50 : 90},
          'width' : ${isMobile ? 320 : 728},
          'params' : {}
        };
      `

      const invokeScript = document.createElement('script')
      invokeScript.type = 'text/javascript'
      // Using highperformanceformat to bypass DNS blocking
      invokeScript.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`
      
      adContainerRef.current.appendChild(confScript)
      adContainerRef.current.appendChild(invokeScript)
    }
  }, [type])

  return (
    <div 
      className={type === 'mobile' ? "flex md:hidden w-full justify-center py-2" : "hidden md:flex w-full justify-center py-4"} 
      ref={adContainerRef} 
      style={{ 
        minHeight: type === 'mobile' ? '50px' : '90px',
        backgroundColor: 'transparent'
      }} 
    />
  )
}
