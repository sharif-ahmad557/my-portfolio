"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Headphones, Send, Code2 } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const About = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation Variants
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

  const dotColor = mounted && theme === "dark" ? "#4b5563" : "#9ca3af";

  return (
    <section
      id="about"
      className="relative py-20 px-4 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background -z-20"></div>

      <div
        className="absolute inset-0 -z-10 h-full w-full opacity-40"
        style={{
          backgroundImage: `radial-gradient(${dotColor} 1.5px, transparent 1.5px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-title/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-title tracking-tight"
          >
            About Me
          </motion.h2>
          <span className="text-sm text-text font-medium relative inline-block">
            My Introduction
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-title/20 rounded-full"></span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end relative group"
          >
            {/* Image Border/Decor */}
            <div className="absolute inset-0 bg-title/10 rounded-3xl rotate-6 scale-95 group-hover:rotate-3 transition-transform duration-500"></div>

            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-title/10 bg-background">
              <Image
                src="/assets/profile.png"
                alt="Sharif About"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Floating Tech Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 md:right-10 bg-background/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-title/10 flex items-center gap-3 z-10"
            >
              <div className="bg-title/10 p-2 rounded-lg text-title">
                <Code2 size={24} />
              </div>
              <div>
                <span className="text-[10px] text-text font-bold uppercase tracking-wider">
                  Stack
                </span>
                <p className="text-title font-bold text-sm">MERN Dev</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left relative z-10"
          >
            {/* Info Cards Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8 w-full">
              {/* Cards - Glass Effect Added */}
              <motion.div
                variants={itemVariants}
                className="bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-title/10 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <Award className="mx-auto text-title mb-2" size={22} />
                <h3 className="font-bold text-title text-sm">Experience</h3>
                <span className="text-[10px] text-text block mt-1">
                  1+ Year
                </span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-title/10 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <Briefcase className="mx-auto text-title mb-2" size={22} />
                <h3 className="font-bold text-title text-sm">Completed</h3>
                <span className="text-[10px] text-text block mt-1">
                  20+ Projects
                </span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-title/10 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <Headphones className="mx-auto text-title mb-2" size={22} />
                <h3 className="font-bold text-title text-sm">Support</h3>
                <span className="text-[10px] text-text block mt-1">
                  Online 24/7
                </span>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="bg-background/80 backdrop-blur-lg border border-title/5 p-6 rounded-2xl shadow-sm mb-8 relative"
            >
              {/* Decorative Corner Lines */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-title/20 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-title/20 rounded-br-lg"></div>

              <p className="text-text leading-relaxed text-[15px] md:text-base font-medium opacity-90">
                I am a passionate{" "}
                <span className="text-title font-bold">
                  Junior MERN Stack Developer
                </span>{" "}
                specialized in building responsive and functional web
                applications.
                <br />
                <br />
                With a strong foundation in{" "}
                <span className="font-semibold text-title">
                  React.js, Next.js, and Tailwind CSS
                </span>
                , I create modern user interfaces. On the backend, I am
                proficient in{" "}
                <span className="font-semibold text-title">
                  Node.js, Express.js
                </span>{" "}
                and managing databases with{" "}
                <span className="font-semibold text-title">
                  MongoDB & Firebase
                </span>
                . I am always eager to learn new technologies.
              </p>
            </motion.div>

            {/* Download CV Button */}
            <a
              href="#contact"
              className="bg-title text-background hover:bg-title/90 px-8 py-4 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-xl shadow-title/10 group font-medium"
            >
              Contact Me
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
