import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 8) + 5;
      current = Math.min(100, current + step);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800);
        }, 300);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[10000] bg-[#FAF8F5] flex flex-col justify-between p-8 sm:p-12 md:p-16 select-none cursor-wait"
        >
          {/* Header metadata */}
          <div className="flex justify-between items-start text-xs font-mono tracking-widest text-[#6E5668]">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#87B38D] animate-pulse"></span>
              <span className="text-[#22031F] font-medium">SARA ALI AHMAD // 2026</span>
            </div>
            <div className="text-right">
              <span className="text-[#22031F]">LUCKNOW, UP [IN]</span>
              <span className="block text-[10px] text-[#6E5668]">26.8467° N, 80.9462° E</span>
            </div>
          </div>

          {/* Central initials typography reveal in Deep Plum & Blush */}
          <div className="my-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative inline-block"
            >
              <h1 className="font-serif italic text-6xl sm:text-8xl md:text-9xl text-[#22031F] tracking-tight">
                S<span className="text-[#87B38D]">.</span>A<span className="text-[#F2B7C6]">.</span>A
              </h1>
              <motion.div
                className="mt-4 font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-[#6E5668]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                Creative Developer &bull; BCA &bull; Flutter Explorer
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom loader bar and percentage */}
          <div className="space-y-3 max-w-xl mx-auto w-full">
            <div className="flex justify-between items-baseline font-mono">
              <div className="text-xs tracking-widest text-[#6E5668] uppercase">
                {progress < 50 && "INITIALIZING BOTANICAL EDITORIAL"}
                {progress >= 50 && progress < 90 && "PREPARING INTERFACES"}
                {progress >= 90 && "WELCOME"}
              </div>
              <div className="text-3xl sm:text-4xl font-mono text-[#22031F] font-medium tracking-tight">
                {progress.toString().padStart(2, '0')}<span className="text-[#87B38D] text-lg sm:text-xl ml-1">%</span>
              </div>
            </div>

            {/* Hairline progress line */}
            <div className="w-full h-[2px] bg-[rgba(34,3,31,0.08)] overflow-hidden relative rounded-full">
              <motion.div
                className="h-full bg-[#87B38D]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
