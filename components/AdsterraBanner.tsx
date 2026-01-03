"use client";

import { useEffect } from "react";

export default function AdsterraBanner() {
  useEffect(() => {
    // Adsterra options
    (window as any).atOptions = {
      key: "26985683759ed90ebd2497232a5046ba",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };

    // Load Adsterra script
    const script = document.createElement("script");
    script.src =
      "https://encouragementglutton.com/26985683759ed90ebd2497232a5046ba/invoke.js";
    script.async = true;

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        margin: "16px 0",
        overflow: "hidden",
      }}
    />
  );
}
