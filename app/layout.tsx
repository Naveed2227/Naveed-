import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { useEffect } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

// Client-side protection component
function ClientProtection() {
  useEffect(() => {
    // Skip protections in development mode to allow HMR
    if (process.env.NODE_ENV === 'development') {
      console.log('DevTools protections disabled in development mode')
      return
    }

    // Disable right-click
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable text selection
    const disableTextSelection = (e: Event) => {
      e.preventDefault()
      return false
    }

    // Disable keyboard shortcuts
    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I/J
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        e.preventDefault()
        return false
      }
    }

    // DevTools detection
    const detectDevTools = () => {
      const devtools = {
        open: false,
        orientation: null
      }
      
      const threshold = 160
      
      const checkDevTools = () => {
        if (
          window.outerHeight - window.innerHeight > threshold ||
          window.outerWidth - window.innerWidth > threshold
        ) {
          if (!devtools.open) {
            devtools.open = true
            // Redirect to warning page
            window.location.href = '/warning'
          }
        } else {
          devtools.open = false
        }
      }
      
      // Check immediately and then periodically
      checkDevTools()
      setInterval(checkDevTools, 1000)
    }

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick)
    document.addEventListener('selectstart', disableTextSelection)
    document.addEventListener('keydown', disableKeyboardShortcuts)
    
    // Add CSS to disable text selection
    const style = document.createElement('style')
    style.textContent = `
      body {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
      }
      
      /* Allow selection for accessibility inputs */
      input, textarea, [contenteditable="true"] {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }
    `
    document.head.appendChild(style)
    
    // Start DevTools detection
    detectDevTools()
    
    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', disableRightClick)
      document.removeEventListener('selectstart', disableTextSelection)
      document.removeEventListener('keydown', disableKeyboardShortcuts)
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
  }, [])
  
  return null
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;" />
      </head>
      <body className={inter.className}>
        <ClientProtection />
        {children}
      </body>
    </html>
  )
}
