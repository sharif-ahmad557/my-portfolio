"use client";

import { motion } from "framer-motion";
import {
  Send,
  Facebook,
  Linkedin,
  Github,
  Layout,
  Server,
  Code2,
} from "lucide-react";
import Image from "next/image";
import { Link } from "react-scroll";
import { FileText } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/profile.php?id=61576389759662",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/shariful-islam-web-developer/",
    },
    { icon: <Github size={20} />, href: "https://github.com/sharif-ahmad557" },
  ];

  // Stagger Container for Text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-[var(--header-height)] pb-12 overflow-hidden relative"
    >
      {/* ============ BACKGROUND DECORATION ============ */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 dark:opacity-40"></div>

      {/* Blur Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

      <div className="container grid md:grid-cols-[80px_1.5fr_1fr] gap-10 items-center z-10">
        {/* ============ 1. SOCIAL SIDEBAR (LEFT) ============ */}
        <div className="hidden md:flex flex-col gap-6 items-center">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-title/30"></div>
          <div className="flex flex-col gap-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                className="text-text hover:text-title hover:-translate-y-1 transition-all duration-300 p-2 border border-transparent hover:border-title/10 rounded-full hover:bg-title/5"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-title/30"></div>
        </div>

        {/* ============ 2. TEXT CONTENT (CENTER) ============ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-2 md:order-1 flex flex-col gap-5 text-center md:text-left items-center md:items-start"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-title/5 border border-title/10 text-xs font-medium text-title mb-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Work
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <span className="text-xl md:text-2xl font-medium text-text">
              Hey, I'm
            </span>
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
              className="text-3xl origin-bottom-right cursor-default"
            >
              👋
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-title tracking-tight"
          >
            Sharif<span className="text-title/40">.</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <div className="h-[2px] w-10 bg-title/50"></div>
            <h2 className="text-xl md:text-2xl font-semibold text-title/80">
              MERN Stack Developer
            </h2>
          </motion.div>

          {/* ============ FIX: READABILITY IMPROVED HERE ============ */}
          <motion.p
            variants={itemVariants}
            className="text-text max-w-lg text-sm md:text-base leading-relaxed 
                       bg-background/60 backdrop-blur-md border border-title/5 
                       p-4 rounded-xl shadow-sm z-20"
          >
            I transform ideas into high-quality digital products with clean code
            and pixel-perfect design. Passionate about building minimal &
            functional web applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start"
          >
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/assets/Resume_of_SHARIF_AHMAD.pdf"
              download="Resume of SHARIF AHMAD"
              className="bg-title text-background hover:bg-title/90 px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 shadow-xl shadow-title/10 group font-medium"
            >
              Download CV
              <FileText size={20} className="group-hover:animate-bounce" />
            </motion.a>

            <a
              href="#portfolio"
              className="px-8 py-4 rounded-xl border border-title/20 hover:border-title text-title transition-all duration-300 font-medium hover:bg-title/5 backdrop-blur-sm"
            >
              View Projects
            </a>
          </motion.div>

          {/* Mobile Socials */}
          <div className="flex md:hidden gap-6 mt-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-text hover:text-title"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* ============ 3. IMAGE PROFILE (RIGHT SIDE) ============ */}
        <div className="order-1 md:order-2 flex justify-center relative z-10">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <motion.div
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-title/5 to-title/20 border-2 border-title/10"
            />

            {/* Main Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-2 overflow-hidden rounded-[inherit] z-10"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            >
              <Image
                src="/assets/profile-1.png"
                alt="Sharif Profile"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              animate={{ y: [0, -10, 0] }}
              className="absolute top-10 -left-6 md:-left-12 bg-background/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-title/5 flex items-center gap-3 z-20"
            >
              <div className="bg-title/10 p-2 rounded-lg text-title">
                <Code2 size={20} />
              </div>
              <div>
                <h3 className="font-bold text-title text-sm">1+ Year</h3>
                <span className="text-[10px] text-text font-medium">
                  Dedication
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              animate={{ y: [0, 10, 0] }}
              className="absolute bottom-10 -right-6 md:-right-4 bg-background/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-title/5 flex items-center gap-3 z-20"
            >
              <div className="bg-title/10 p-2 rounded-lg text-title">
                <Server size={20} />
              </div>
              <div>
                <h3 className="font-bold text-title text-sm">20+ Projects</h3>
                <span className="text-[10px] text-text font-medium">
                  Completed
                </span>
              </div>
            </motion.div>

            {/* Floating Decor Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 right-10 text-title/20 z-0"
            >
              <Layout size={40} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute mt-50 bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer z-20"
      >
        <Link to="about" smooth={true} duration={500} offset={-50}>
          <div className="w-[30px] h-[50px] rounded-full border-2 border-title/30 flex justify-center p-2 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-1.5 bg-title rounded-full"
            />
          </div>
        </Link>
        <span className="text-[10px] uppercase tracking-widest text-text/70">
          Scroll
        </span>
      </motion.div> */}
    </section>
  );
};

export default Hero;
