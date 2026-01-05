"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "Tailwind", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Next.js", level: "Basic" },
  ];

  const backendSkills = [
    { name: "Node.js", level: "Basic" },
    { name: "Express.js", level: "Basic" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Firebase", level: "Basic" },
  ];

  const wordpressSkills = [
    { name: "Elementor Pro", level: "Expert" },
    { name: "WooCommerce", level: "Intermediate" },
    { name: "Dynamic Tags", level: "Intermediate" },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="skills"
      className="section py-20 px-4 transition-colors relative overflow-hidden"
    >
      {/* ============ BACKGROUND DECORATION ============ */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px] opacity-40 dark:opacity-30"></div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-title/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            Skills
          </motion.h2>
          <span className="text-sm text-text block mt-2">
            My Technical Level
          </span>
        </div>

        {/* ============ SKILLS CONTAINER ============ */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {/* ----- Box 1: Frontend Developer ----- */}
          <SkillBox
            title="Frontend Developer"
            skills={frontendSkills}
            variants={fadeUp}
          />

          {/* ----- Box 2: Backend Developer ----- */}
          <SkillBox
            title="Backend Developer"
            skills={backendSkills}
            variants={fadeUp}
          />

          {/* ----- Box 3: WordPress Developer ----- */}
          <SkillBox
            title="WordPress Developer"
            skills={wordpressSkills}
            variants={fadeUp}
          />
        </div>
      </div>
    </section>
  );
};

// Reusable Component for Skill Box
const SkillBox = ({ title, skills, variants }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="w-full md:w-[350px] lg:w-[380px] bg-container/80 backdrop-blur-sm dark:bg-darkContainer/80 p-6 md:p-8 rounded-[2rem] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-title/20 transition-all duration-300 group"
    >
      <h3 className="text-center font-bold text-lg text-title mb-6 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-y-6 gap-x-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex gap-2 items-start">
            <BadgeCheck size={18} className="text-title min-w-5 mt-0.5" />
            <div>
              <h4 className="font-semibold text-title leading-tight text-[15px]">
                {skill.name}
              </h4>
              <span className="text-[11px] text-text/80 font-medium">
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
