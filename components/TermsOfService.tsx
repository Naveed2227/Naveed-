"use client"

import type React from "react"
import { X } from "lucide-react"

interface TermsOfServiceProps {
  onClose?: () => void
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onClose }) => {
  return (
    <div className="max-h-[80vh] overflow-y-auto">
      {onClose && (
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-300" />
          </button>
        </div>
      )}

      <div className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-white">Terms of Service</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
          <p className="text-gray-300 mb-4">
            By accessing and using this application, you accept and agree to be bound by the terms and provision of this
            agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">2. Use License</h2>
          <p className="text-gray-300 mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on this
            application for personal, non-commercial transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the application</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            <li>Attempt to gain unauthorized access to any portion or feature of the application</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">3. Disclaimer</h2>
          <p className="text-gray-300 mb-4">
            The materials on this application are provided on an 'as is' basis. We make no warranties, expressed or
            implied, and hereby disclaim and negate all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">4. Limitations</h2>
          <p className="text-gray-300 mb-4">
            In no event shall our company or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
            use the materials on the application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">5. Accuracy of Materials</h2>
          <p className="text-gray-300 mb-4">
            The materials appearing on the application could include technical, typographical, or photographic errors.
            We do not warrant that any of the materials on the application are accurate, complete, or current. We may
            make changes to the materials contained on the application at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">6. Links</h2>
          <p className="text-gray-300 mb-4">
            We have not reviewed all of the sites linked to our application and are not responsible for the contents of
            any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any
            such linked website is at the user's own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">7. Modifications</h2>
          <p className="text-gray-300 mb-4">
            We may revise these terms of service for our application at any time without notice. By using this
            application, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">8. Governing Law</h2>
          <p className="text-gray-300 mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in
            which the company operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that
            location.
          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsOfService
