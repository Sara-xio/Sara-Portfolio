import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useMediaQuery';

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 28, stiffness: 320, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 320, mass: 0.5 });

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-cursor]') as HTMLElement | null;
      if (target) {
        const label = target.getAttribute('data-cursor') || '';
        setCursorLabel(label);
        setIsHovered(true);
      } else {
        const isClickable = (e.target as HTMLElement).closest('a, button, input, textarea, [role="button"]');
        if (isClickable) {
          setCursorLabel('');
          setIsHovered(true);
        } else {
          setCursorLabel('');
          setIsHovered(false);
        }
      }
    };

    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouch, isVisible, mouseX, mouseY]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Central dot in Deep Plum */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#22031F]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHovered && cursorLabel ? 0 : 1,
        }}
      />

      {/* Trailing smooth ring / label bubble in Sage Green */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center font-mono text-[10px] tracking-widest font-semibold select-none"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorLabel ? 84 : isHovered ? 44 : 26,
          height: cursorLabel ? 84 : isHovered ? 44 : 26,
          backgroundColor: cursorLabel
            ? 'rgba(135, 179, 141, 0.95)'
            : isHovered
            ? 'rgba(135, 179, 141, 0.16)'
            : 'rgba(34, 3, 31, 0.04)',
          borderColor: cursorLabel ? '#87B38D' : isHovered ? '#87B38D' : 'rgba(135, 179, 141, 0.45)',
          borderWidth: cursorLabel ? '0px' : '1.5px',
          color: cursorLabel ? '#FFFFFF' : '#22031F',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 280 }}
      >
        {cursorLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="uppercase font-semibold tracking-wider text-center px-1"
          >
            {cursorLabel}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
