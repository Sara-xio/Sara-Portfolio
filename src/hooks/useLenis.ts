import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Bind to window for global access if needed
    (window as any).__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, [enabled]);
}
