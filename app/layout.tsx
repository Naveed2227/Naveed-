import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: "MWT Assistant: Vehicle Stats, Battle Pass and Events",
  description: "View and compare all vehicles in MWT with detailed stats.",
  metadataBase: new URL('https://www.mwtassistant.com'),
  generator: 'v0.app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <style type="text/css">
  .mobileShow {display: none;}

  /* Smartphone Portrait and Landscape */
  @media only screen
    and (min-device-width : 320px)
    and (max-device-width : 480px){ 
      .mobileShow {display: inline;}
  }
  .mobileHide { display: inline; }

  /* Smartphone Portrait and Landscape */
  @media only screen
    and (min-device-width : 320px)
    and (max-device-width : 480px){
     .mobileHide { display: none;}
  }
</style>

<div class="mobileShow"> Your code snippet for mobile </div>

<div class="mobileHide"> <script>
  atOptions = {
    'key' : '26985683759ed90ebd2497232a5046ba',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://encouragementglutton.com/26985683759ed90ebd2497232a5046ba/invoke.js"></script> </div>


      <head>
        {/* Ezoic Privacy Scripts */}
        <script data-cfasync="false" src="https://cmp.gatekeeperconsent.com/min.js" />
        <script data-cfasync="false" src="https://the.gatekeeperconsent.com/cmp.min.js" />

        {/* Ezoic Header Script */}
        <script async src="//www.ezojs.com/ezoic/sa.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              ezstandalone.cmd = ezstandalone.cmd || [];
            `,
          }}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
          crossOrigin="anonymous"
        />
      </head>

      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">

         

          {/* Ezoic top_of_page Ad */}
          <div id="ezoic-pub-ad-placeholder-101" />

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
