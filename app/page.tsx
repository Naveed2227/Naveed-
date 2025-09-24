"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function WarningPage() {
  const router = useRouter()

  useEffect(() => {
    // Prevent going back to the previous page
    const preventBack = () => {
      window.history.pushState(null, "", window.location.href)
    }

    window.history.pushState(null, "", window.location.href)
    window.addEventListener("popstate", preventBack)

    // Additional protection - redirect if user tries to inspect
    const checkDevTools = () => {
      const threshold = 160
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        // Keep refreshing the warning page if DevTools is open
        window.location.reload()
      }
    }

    const interval = setInterval(checkDevTools, 1000)

    return () => {
      window.removeEventListener("popstate", preventBack)
      clearInterval(interval)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-red-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8 text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-red-600 mb-2">Access Denied</h1>
          <p className="text-gray-700 text-lg">
            Developer Tools detected. This action has been logged.
          </p>
        </div>
        
        <div className="mb-6 text-left bg-gray-50 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800 mb-2">For security reasons:</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Please close Developer Tools</li>
            <li>• Do not attempt to inspect this page</li>
            <li>• Unauthorized access is prohibited</li>
            <li>• This incident has been recorded</li>
          </ul>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => {
              // Check if DevTools is closed before redirecting
              const threshold = 160
              if (
                window.outerHeight - window.innerHeight <= threshold &&
                window.outerWidth - window.innerWidth <= threshold
              ) {
                router.push("/")
              } else {
                alert("Please close Developer Tools first")
              }
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Return to Main Site
          </button>
          
          <p className="text-xs text-gray-500">
            Continued attempts to access Developer Tools may result in restricted access.
          </p>
        </div>
      </div>
    </div>
  )
}
