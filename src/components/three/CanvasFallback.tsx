import React, { useEffect, useRef } from 'react';

/**
 * 2D canvas fallback tuned to the Light Botanical Editorial theme (#87B38D, #22031F, #F2B7C6 on #FAF8F5).
 */
export function CanvasFallback() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number; isBlush: boolean }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.3,
        isBlush: i % 4 === 0
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      angle += 0.0035;

      ctx.save();
      [110, 170, 230].forEach((radius, i) => {
        ctx.beginPath();
        ctx.ellipse(cx, cy, radius, radius * 0.45, angle * (i % 2 === 0 ? 1 : -1), 0, Math.PI * 2);
        ctx.strokeStyle = i === 1 ? 'rgba(242, 183, 198, 0.45)' : 'rgba(135, 179, 141, 0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      ctx.restore();

      // Render drifting particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.isBlush
          ? `rgba(242, 183, 198, ${p.alpha * 0.85})`
          : `rgba(135, 179, 141, ${p.alpha * 0.75})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block pointer-events-none" />;
}
