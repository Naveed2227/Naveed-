import React from 'react';
import { Shield } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <div className="flex items-center mb-6">
        <Shield className="text-blue-400 mr-2" size={24} />
        <h1 className="text-2xl font-bold text-white">Terms of Service</h1>
      </div>
      
      <div className="prose prose-invert text-gray-300">
        <p className="mb-4">Last updated: October 26, 2025</p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using MWT Assistant, you accept and agree to be bound by these Terms of Service. 
          If you do not agree with any part of these terms, you must not use our service.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">2. Description of Service</h2>
        <p className="mb-4">
          MWT Assistant provides vehicle statistics, comparison tools, and game-related information for educational 
          and entertainment purposes only. We are not affiliated with or endorsed by the creators of Modern War Thunder.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">3. Intellectual Property</h2>
        <p className="mb-4">
          All game content, including but not limited to vehicle names, images, and statistics, are the property of 
          their respective owners and are used under fair use for educational and informational purposes.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">4. User Conduct</h2>
        <p className="mb-4">
          You agree not to use the service to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Violate any laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Spread malware or engage in hacking</li>
          <li>Harass or defame others</li>
          <li>Collect user information without consent</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          MWT Assistant is provided "as is" without any warranties. We are not responsible for any damages or losses 
          resulting from the use of our service. Game statistics and information are provided for informational 
          purposes only and may not be 100% accurate.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">6. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Continued use of the service after changes 
          constitutes acceptance of the new terms.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">7. Contact Information</h2>
        <p className="mb-4">
          For any questions about these Terms of Service, please contact us at support@mwtassistant.com
        </p>
      </div>
    </div>
  );
}
