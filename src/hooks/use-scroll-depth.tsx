import { useEffect, useRef } from 'react';
import { getAnalytics, logEvent } from 'firebase/analytics';
import app from '../firebase';

export const useScrollDepth = () => {
  const analytics = getAnalytics(app);
  const hasLogged75Percent = useRef(false);

  useEffect(() => {
    if (!import.meta.env.PROD) {
      return; // Only track in production
    }

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;

      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (scrollPercentage >= 75 && !hasLogged75Percent.current) {
        logEvent(analytics, 'scroll_depth', { percent: 75 });
        hasLogged75Percent.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [analytics]);
};
