// Cookie utility functions
type CookieOptions = {
  days?: number;
  path?: string;
  sameSite?: 'Strict' | 'Lax' | 'None';
  secure?: boolean;
};

export const setCookie = (name: string, value: string, options: CookieOptions = {}) => {
  const { days = 365, path = '/', sameSite = 'Lax', secure = true } = options;
  
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  
  const expires = `expires=${date.toUTCString()}`;
  const cookiePath = `path=${path}`;
  const cookieSameSite = `SameSite=${sameSite}`;
  const cookieSecure = secure ? 'Secure' : '';
  
  document.cookie = `${name}=${value}; ${expires}; ${cookiePath}; ${cookieSameSite}${cookieSecure ? '; ' + cookieSecure : ''}`;
};

export const getCookie = (name: string): string | null => {
  const nameEQ = name + '=';
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
};

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; Max-Age=0; path=/`;
};
