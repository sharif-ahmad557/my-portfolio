"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= 560) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 z-40 bg-title text-background p-3 rounded-xl shadow-lg hover:bg-text transition-all duration-400 transform ${
        showScroll ? "bottom-24 md:bottom-10 opacity-100 translate-y-0" : "-bottom-full opacity-0 translate-y-10"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollUp;