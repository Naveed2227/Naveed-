"use client";

import { useEffect } from "react";

export default function AdsterraBanner() {
  useEffect(() => {
    // Desktop 728x90
    (window as any).atOptionsDesktop = {
      key: "26985683759ed90ebd2497232a5046ba", // desktop key
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };
    const desktopScript = document.createElement("script");
    desktopScript.src =
      "https://encouragementglutton.com/26985683759ed90ebd2497232a5046ba/invoke.js";
    desktopScript.async = true;
    document.body.appendChild(desktopScript);

    // Mobile 320x50
    (window as any).atOptionsMobile = {
      key: "26985683759ed90ebd2497232a5046ba", // replace with your mobile unit key
      format: "iframe",
      height: 50,
      width: 320,
      params: {},
    };
    const mobileScript = document.createElement("script");
    mobileScript.src =
      "https://encouragementglutton.com/26985683759ed90ebd2497232a5046ba/invoke.js";
    mobileScript.async = true;
    document.body.appendChild(mobileScript);

    // Cleanup
    return () => {
      document.body.removeChild(desktopScript);
      document.body.removeChild(mobileScript);
    };
  }, []);

  return (
    <>
      {/* Desktop Banner */}
      <div className="mobileHide" style={{ textAlign: "center", margin: "16px 0" }} />

      {/* Mobile Banner */}
      <div className="mobileShow" style={{ textAlign: "center", margin: "16px 0" }} />

      {/* Mobile/Desktop CSS */}
      <style>
        {`
          .mobileShow { display: none; }
          @media only screen and (max-width: 480px) {
            .mobileShow { display: inline; }
            .mobileHide { display: none; }
          }
        `}
      </style>
    </>
  );
}
