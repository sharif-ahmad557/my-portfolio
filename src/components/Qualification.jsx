"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="qualification"
      className="section py-20 px-4 transition-colors relative overflow-hidden"
    >
      {/* ============ BACKGROUND DECORATION ============ */}
      {/* ডট প্যাটার্ন */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px] opacity-40 dark:opacity-30"></div>

      {/* ব্লার ইফেক্ট */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-title/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container relative z-10">
        {/* ============ SECTION TITLE ============ */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            Qualification
          </motion.h2>
          <span className="text-sm text-text block mt-2">My Journey</span>
        </div>

        {/* ============ TABS (Experience & Education) ============ */}
        <div className="flex justify-center gap-10 mb-12">
          {/* Experience Tab Button */}
          <div
            className={`flex items-center gap-2 cursor-pointer text-lg md:text-xl font-medium transition-colors ${
              toggleState === 1
                ? "text-title border-b-2 border-title"
                : "text-text hover:text-title"
            }`}
            onClick={() => toggleTab(1)}
          >
            <Briefcase size={22} />
            Experience
          </div>

          {/* Education/Training Tab Button */}
          <div
            className={`flex items-center gap-2 cursor-pointer text-lg md:text-xl font-medium transition-colors ${
              toggleState === 2
                ? "text-title border-b-2 border-title"
                : "text-text hover:text-title"
            }`}
            onClick={() => toggleTab(2)}
          >
            <GraduationCap size={22} />
            Training
          </div>
        </div>

        {/* ============ TIMELINE CONTENT ============ */}
        <div className="max-w-2xl mx-auto">
          {/* ============ TAB 1: EXPERIENCE ============ */}
          {toggleState === 1 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-[1fr_max-content_1fr] gap-x-6"
            >
              {/* Exp Item 1: Freelance/Junior Dev */}
              <div className="text-right">
                <h3 className="font-semibold text-title text-base md:text-lg">
                  MERN Stack Developer
                </h3>
                <span className="text-xs md:text-sm text-text block mb-2">
                  Freelance / Remote
                </span>
                <div className="text-[10px] md:text-xs text-text/70 flex items-center justify-end gap-1">
                  <Calendar size={12} /> 2024 - Present
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
                <span className="block w-px h-full bg-title/20 translate-y-[-7px]"></span>
              </div>

              <div></div>

              {/* Exp Item 2: WordPress */}
              <div></div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
                <span className="block w-px h-full bg-title/20 translate-y-[-7px]"></span>
              </div>

              <div>
                <h3 className="font-semibold text-title text-base md:text-lg">
                  WordPress Expert
                </h3>
                <span className="text-xs md:text-sm text-text block mb-2">
                  Fiverr / Local Clients
                </span>
                <div className="text-[10px] md:text-xs text-text/70 flex items-center gap-1">
                  <Calendar size={12} /> 2023 - 2024
                </div>
              </div>

              {/* Exp Item 3: Frontend Practice */}
              <div className="text-right">
                <h3 className="font-semibold text-title text-base md:text-lg">
                  Frontend Development
                </h3>
                <span className="text-xs md:text-sm text-text block mb-2">
                  Practice Projects
                </span>
                <div className="text-[10px] md:text-xs text-text/70 flex items-center justify-end gap-1">
                  <Calendar size={12} /> 2023
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
              </div>

              <div></div>
            </motion.div>
          )}

          {/* ============ TAB 2: TRAINING / COURSES (Education Replacement) ============ */}
          {toggleState === 2 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-[1fr_max-content_1fr] gap-x-6"
            >
              {/* Training Item 1: Programming Hero */}
              <div className="text-right">
                <h3 className="font-semibold text-title text-base md:text-lg">
                  Complete Web Development
                </h3>
                <span className="text-xs md:text-sm text-text block mb-2">
                  Programming Hero
                </span>
                <div className="text-[10px] md:text-xs text-text/70 flex items-center justify-end gap-1">
                  <Calendar size={12} />
                  2024 - Present
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
                <span className="block w-px h-full bg-title/20 translate-y-[-7px]"></span>
              </div>

              <div></div>

              {/* Training Item 2: Self Paced */}
              <div></div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
                <span className="block w-px h-full bg-title/20 translate-y-[-7px]"></span>
              </div>

              <div>
                <h3 className="font-semibold text-title text-base md:text-lg">
                  Modern JavaScript & React
                </h3>
                <span className="text-xs md:text-sm text-text block mb-2">
                  Self-Paced Learning
                </span>
                <div className="text-[10px] md:text-xs text-text/70 flex items-center gap-1">
                  <Calendar size={12} /> 2023 - 2024
                </div>
              </div>

              {/* Training Item 3: WordPress */}
              <div className="text-right">
                <h3 className="font-semibold text-title text-base md:text-lg">
                  WordPress Customization
                </h3>
                <span className="text-xs md:text-sm text-text block mb-2">
                  Online Courses
                </span>
                <div className="text-[10px] md:text-xs text-text/70 flex items-center justify-end gap-1">
                  <Calendar size={12} /> 2023
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
              </div>

              <div></div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
