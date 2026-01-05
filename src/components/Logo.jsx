"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
      {/* Icon Container */}
      <motion.div
        className="relative w-10 h-10 flex items-center justify-center bg-gray-900 dark:bg-white rounded-xl overflow-hidden shadow-lg"
        whileHover={{ rotate: 90, scale: 1.05 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* The Letter "S" */}
        <span className="relative text-white font-bold text-2xl font-mono z-10">
          S
        </span>

        {/* Shine Effect Animation */}
        <motion.div
          initial={{ x: -50 }}
          whileHover={{ x: 50 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full bg-white/30 skew-x-12 -translate-x-12 z-20"
        />
      </motion.div>

      {/* Name Text */}
      <div className="flex flex-col justify-center -space-y-1">
        <motion.span
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold tracking-tight transition-colors duration-300 text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"
        >
          Sharif
        </motion.span>

        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-widest uppercase"
        >
          Portfolio
        </motion.span>
      </div>
    </Link>
  );
};

export default Logo;
