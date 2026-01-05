"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Home,
  User,
  FileText,
  Briefcase,
  ImageIcon,
  Send,
  Moon,
  Sun,
  LayoutGrid,
  X,
} from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { id: "home", icon: <Home size={18} />, label: "Home" },
    { id: "about", icon: <User size={18} />, label: "About" },
    { id: "skills", icon: <FileText size={18} />, label: "Skills" },
    { id: "services", icon: <Briefcase size={18} />, label: "Services" },
    { id: "portfolio", icon: <ImageIcon size={18} />, label: "Projects" },
    { id: "contact", icon: <Send size={18} />, label: "Contact" },
  ];

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <header
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent ${
          scroll
            ? "bg-background/70 backdrop-blur-xl shadow-sm border-gray-200/10"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container mx-auto px-10 flex justify-between items-center h-[var(--header-height)]">
          {/* Logo */}
          <a
            href="#"
            className="font-bold text-2xl text-title hover:text-text transition-colors tracking-tight"
          >
            Sharif<span className="text-title/50">.</span>
          </a>

          <div className="flex items-center gap-6">
            {/* Nav Items Container */}
            <div className="flex items-center bg-title/5 rounded-full p-1 border border-title/5 backdrop-blur-sm">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={() => setActiveNav(item.id)}
                  className="relative px-4 py-2 text-sm font-medium cursor-pointer transition-colors z-10"
                >
                  {/* Text Color Logic */}
                  <span
                    className={`relative z-20 transition-colors duration-300 ${
                      activeNav === item.id
                        ? "text-background font-semibold"
                        : "text-text hover:text-title"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active Pill Animation */}
                  {activeNav === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-title rounded-full shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full bg-title/5 hover:bg-title/10 transition-colors text-title border border-title/5"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE HEADER ================= */}

      {/* Top Logo for Mobile */}
      <div
        className={`md:hidden fixed top-0 w-full p-4 z-40 transition-all duration-300 ${
          scroll
            ? "bg-background/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <a href="#" className="font-bold text-xl text-title">
          Sharif<span className="text-title/50">.</span>
        </a>
      </div>

      {/* Bottom Navigation Control Center */}
      <div className="md:hidden fixed bottom-6 right-6 left-6 z-50 pointer-events-none flex justify-end">
        <div className="relative pointer-events-auto">
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute bottom-16 right-0 bg-container/90 backdrop-blur-xl border border-title/10 shadow-2xl rounded-2xl p-4 w-[280px]"
              >
                <div className="grid grid-cols-3 gap-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => {
                        setActiveNav(item.id);
                        setToggle(false);
                      }}
                      className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl transition-all duration-200 ${
                        activeNav === item.id
                          ? "bg-title text-background shadow-lg"
                          : "bg-background text-text hover:bg-title/5 hover:text-title"
                      }`}
                    >
                      {item.icon}
                      <span className="text-[10px] font-medium">
                        {item.label}
                      </span>
                    </Link>
                  ))}

                  {/* Theme Toggle inside Grid */}
                  <button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-background text-text hover:bg-title/5 hover:text-title transition-all border border-title/5"
                  >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    <span className="text-[10px] font-medium">Theme</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Action Button (Toggle) */}
          <button
            onClick={() => setToggle(!toggle)}
            className="flex items-center justify-center w-14 h-14 bg-title text-background rounded-full shadow-lg hover:scale-105 transition-transform active:scale-95"
          >
            <AnimatePresence mode="wait">
              {toggle ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <LayoutGrid size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

