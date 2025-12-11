declare global {
  interface Window {
    clarity: {
      (method: string, ...args: any[]): void;
      q?: any[];
    };
  }
}

export const initClarity = (): void => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  (function(c: Window, l: Document, a: 'clarity', r: 'script', i: string) {
    c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
    const script = l.createElement(r);
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${i}`;
    const firstScript = l.getElementsByTagName(r)[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);
  })(window, document, 'clarity', 'script', 'ujz35itz2y');
};
