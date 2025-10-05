import { useState, useEffect } from 'react';
import { getCookie, setCookie } from '../lib/cookies';

const COOKIE_NAME = 'cookiesAccepted';

export const useCookieConsent = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const cookieValue = getCookie(COOKIE_NAME);
    setShowBanner(cookieValue !== 'true');
    setMounted(true);
  }, []);

  const acceptCookies = () => {
    setCookie(COOKIE_NAME, 'true', { days: 365 });
    setShowBanner(false);
  };

  return {
    showBanner: mounted && showBanner,
    acceptCookies,
  };
};
