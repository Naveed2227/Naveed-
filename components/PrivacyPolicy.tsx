import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-slate-300 bg-slate-900 min-h-screen">
      <h1 className="text-3xl text-cyan-400 font-bold text-center mb-8">
        MWT Assistant – Privacy Policy & Data Integrity
      </h1>

      {/* Table of Contents */}
      <div className="mb-6">
        <h2 className="text-xl text-cyan-300 font-semibold mb-2">Articles</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><a href="#article1" className="text-cyan-400 underline">Article 1.00 – Application Status</a></li>
          <li><a href="#article2" className="text-cyan-400 underline">Article 2.00 – Data Collection</a></li>
          <li><a href="#article3" className="text-cyan-400 underline">Article 3.00 – Informational Accuracy</a></li>
          <li><a href="#article4" className="text-cyan-400 underline">Article 4.00 – Data Integrity</a></li>
          <li><a href="#article5" className="text-cyan-400 underline">Article 5.00 – Ads and Third-Party Content</a></li>
          <li><a href="#article6" className="text-cyan-400 underline">Article 6.00 – Updates and Maintenance</a></li>
          <li><a href="#article7" className="text-cyan-400 underline">Article 7.00 – User Responsibilities</a></li>
          <li><a href="#article8" className="text-cyan-400 underline">Article 8.00 – Intellectual Property</a></li>
          <li><a href="#article9" className="text-cyan-400 underline">Article 9.00 – Contact and Feedback</a></li>
          <li><a href="#article10" className="text-cyan-400 underline">Article 10.00 – Versioning</a></li>
        </ul>
      </div>

      {/* Articles */}
      <section id="article1" className="mb-6">
        <h2 className="text-xl text-cyan-300 font-semibold mt-6">Article 1.00 – Application Status</h2>
        <p>
          MWT Assistant is a Progressive Web App (PWA) designed for informational purposes. It is <strong>not funded</strong> and <strong>not affiliated</strong> with Artstorm or any official MWT entity.
        </p>
      </section>

      <section id="article2" className="mb-6">
        <h2 className="text-xl text-cyan-300 font-semibold mt-6">Article 2.00 – Data Collection</h2>
        <p>
          The app does not collect, store, or share personal data. Only anonymous crash reports and performance metrics may be collected via Google Play Services to improve app stability.
        </p>
      </section>

      <section id="article3" className="mb-6">
        <h2 className="text-xl text-cyan-300 font-semibold mt-6">Article 3.00 – Informational Accuracy</h2>
        <p>
          All vehicle and unit data presented is gathered from publicly available resources and community contributions. We strive to ensure the information is accurate, but completeness and real-time accuracy are not guaranteed.
        </p>
      </section>

      <section id="article4" className="mb-6">
        <h2 className="text-xl text-cyan-300 font-semibold mt-6">Article 4.00 – Data Integrity</h2>
        <p>
          MWT Assistant implements structured data parsing to prevent corruption. Users can report inaccuracies or suggest updates via the contact information provided within the app. We maintain internal data validation procedures to ensure displayed statistics remain consistent with the source CSV.
        </p>
      </section>

      <section id="article5" className="mb-6">
        <h2 className="text-xl text-cyan-300 font-semibold mt-6">Article 5.00 – Ads and Third-Party Content</h2>
        <p>
          The app may display banner and rewarded ads. Third-party ad providers may use cookies or similar technologies to personalize content. MWT Assistant is not responsible for these practices and recommends reviewing each provider’s policies.
        </p>
      </section>

      <section id="article6" className="mb-6">
        <h2 className="text-xl text-cyan-300 font-semibold mt-6">Article 6.00 – Updates and Maintenance</h2>
        <p>
          As a PWA, the app automatically fetches updated vehicle data from Google Sheets. Any new vehicles or changes in stats will be reflected in real-time. Occasional delays or downtime may occur due to network issues.
        </p>
      </section>

      <section id="article7" className="mb-6">
        <h2 className="text-xl text-cyan-300 font-semibold mt-6">Article 7.00 – User Responsibilities</h2>
        <p>
          Users are encouraged to verify critical information independently before making decisions based on app data. The app is intended as a reference tool for enthusiasts and players of MWT.
        </p>
      </section>

      <section id="article8" className="mb-6">
        <h2 className="text-xl text-cyan-300 font-semibold mt-6">Article 8.00 – Intellectual Property</h2>
        <p>
          All logos, images, and trademarks remain the property of their respective owners. No claim of ownership is made by MWT Assistant.
        </p>
      </section>

      <section id="article9" className="mb-6">
        <h2 className="text-xl text-cyan-300 font-semibold mt-6">Article 9.00 – Contact and Feedback</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Email: <a href="mailto:naveed.miandad.007@gmail.com" className="text-cyan-400">naveed.miandad.007@gmail.com</a></li>
          <li>Discord: naveed27</li>
          <li>Instagram: @naveed_2227</li>
        </ul>
      </section>

      <section id="article10" className="mb-6">
        <h2 className="text-xl text-cyan-300 font-semibold mt-6">Article 10.00 – Versioning</h2>
        <p>
          This policy corresponds to <strong>MWT Assistant Version 1.00.0</strong> and may be updated periodically. Users are encouraged to review this component for the latest information.
        </p>
      </section>
    </div>
  );
}
