import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY !== lastScrollY) {
          lastScrollY = currentScrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress = docHeight > 0 ? currentScrollY / docHeight : 0;
          setProgress(Math.min(Math.max(scrollProgress, 0), 1));
          setScrollY(currentScrollY);
        }
        rafId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return { progress, scrollY };
}
