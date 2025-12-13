import { useEffect } from 'react';

const AdBanner = (): JSX.Element => {
  useEffect(() => {
    // This will run on client-side only
    const script1 = document.createElement('script');
    script1.innerHTML = `
      atOptions = {
        'key' : '26985683759ed90ebd2497232a5046ba',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    script1.type = 'text/javascript';
    
    const script2 = document.createElement('script');
    script2.src = 'https://www.highperformanceformat.com/26985683759ed90ebd2497232a5046ba/invoke.js';
    script2.async = true;
    script2.type = 'text/javascript';

    // Create container for the ad
    const adContainer = document.getElementById('ad-container');
    if (adContainer) {
      adContainer.appendChild(script1);
      adContainer.appendChild(script2);
    }

    // Cleanup function to remove scripts when component unmounts
    return () => {
      if (adContainer) {
        adContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      id="ad-container" 
      style={{
        width: '100%',
        maxWidth: '728px',
        margin: '0 auto',
        textAlign: 'center',
        minHeight: '90px',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        marginBottom: '20px'
      }}
    >
      {/* Ad will be loaded here */}
    </div>
  );
};

export default AdBanner;
