import React from "react";

export default function EzoicVerification() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg my-6">
      <h1 className="text-2xl font-bold mb-4">Verify Domain Ownership: mwtassistant.com</h1>

      <p className="mb-2 font-semibold">Steps to verify domain ownership via HTML file:</p>

      <ol className="list-decimal list-inside mb-4 space-y-2">
        <li>
          <strong>Download the file:</strong> Click the button below to download your HTML verification file.
        </li>
        <li>
          <strong>Upload the file to:</strong>{" "}
          <a href="http://mwtassistant.com/" className="text-blue-600 hover:text-blue-800 underline">
            http://mwtassistant.com/
          </a>
          <br />
          Test to see if your file was uploaded successfully:{" "}
          <a
            href="http://mwtassistant.com/ezoic-xCZrdIDEznD0RgIZa0rqhbAgNZoQdU.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all"
          >
            http://mwtassistant.com/ezoic-xCZrdIDEznD0RgIZa0rqhbAgNZoQdU.html
          </a>
        </li>
        <li>
          <strong>Press verify below:</strong> If uploaded successfully, click the button to verify your ownership in the Ezoic dashboard.
        </li>
      </ol>

      <div className="mt-6 space-y-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Verification File
        </button>
        <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Verify Domain in Ezoic
        </button>
      </div>

      <p className="mt-6">
        Ezoic uses <strong>Google MCM</strong> (Multiple Customer Management) to manage ad inventory on your website(s) and provide access to premium demand from Google Ad Exchange and other partners.
      </p>

      <p className="mt-4">
        <strong>Action Required:</strong> Before you can connect to Google, you must first verify domain ownership or complete site integration. This helps ensure that you are operating the site(s) you are signing up with Ezoic.
      </p>

      <footer className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">
        Ezoic Inc.© {new Date().getFullYear()}. All rights reserved.
      </footer>
    </div>
  );
}
