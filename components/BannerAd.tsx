export default function BannerAd() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = {
              'key' : '12ed5f2a30761db8a8f48d836b669b85',
              'format' : 'iframe',
              'height' : 50,
              'width' : 320,
              'params' : {}
            };
          `
        }}
      />
      <script src="https://www.highperformanceformat.com/12ed5f2a30761db8a8f48d836b669b85/invoke.js"></script>
    </div>
  );
}
