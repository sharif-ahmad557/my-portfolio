"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [displayText, setDisplayText] = useState("");
  const [showDots, setShowDots] = useState(false);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const targetText = "Welcome";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Shuffle Text Effect Logic
  useEffect(() => {
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return targetText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iterations >= targetText.length) {
        clearInterval(interval);
        setShowDots(true);
      }

      iterations += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
    >
      {dimension.width > 0 && (
        <>
          {/* Main Content */}
          <div className="flex items-center z-10">
            {/* Shuffling Text */}
            <h1 className="text-white text-5xl md:text-7xl font-bold font-mono tracking-wider">
              {displayText}
            </h1>

            {/* Blinking Dots */}
            {showDots && (
              <div className="flex gap-1 ml-1 mt-4">
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  className="w-3 h-3 rounded-full bg-white"
                ></motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="w-3 h-3 rounded-full bg-white"
                ></motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="w-3 h-3 rounded-full bg-white"
                ></motion.span>
              </div>
            )}
          </div>

          {/* SVG Curve Effect */}
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#141516]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
