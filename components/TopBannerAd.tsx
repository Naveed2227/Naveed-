import { useEffect } from 'react';
import { AdMob, BannerAdOptions, BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';

const TopBannerAd = () => {
  useEffect(() => {
    const showBanner = async () => {
      const options: BannerAdOptions = {
        adId: 'ca-app-pub-3724137161724998/3470769238', // Your AdMob ID
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.TOP_CENTER,
        margin: 0,
        isTesting: true, // set to false in production
      };
      await AdMob.showBanner(options);
    };

    showBanner();
  }, []);

  return (
    <div className="w-full bg-slate-800/50 border-b border-slate-700">
      <div className="max-w-3xl mx-auto px-2 py-1">
        {/* Advertisement label */}
        <div className="text-center text-xs text-slate-300 mb-1">
          Advertisement
        </div>

        {/* Placeholder for layout; real banner shows via AdMob plugin */}
        <div className="w-full flex justify-center">
          <div
            style={{
              width: '320px',
              height: '50px',
              backgroundColor: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              fontSize: '12px',
            }}
          >
            Mobile Top Banner Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBannerAd;
