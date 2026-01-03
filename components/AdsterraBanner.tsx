"use client";

import { useEffect } from "react";

export default function AdsterraBanner() {
  useEffect(() => {
    (window as any).atOptions = {
      key: "28147349",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://encouragementglutton.com/28147349/invoke.js";
    script.async = true;

    document.body.appendChild(script);

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
