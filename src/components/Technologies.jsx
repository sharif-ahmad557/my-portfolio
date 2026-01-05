"use client";

import { motion } from "framer-motion";

const Technologies = () => {
  const techStack = [
    {
      name: "HTML5",
      icon: "https://cdn.simpleicons.org/html5/E34F26",
    },
    {
      name: "CSS3",
      icon: "https://i.postimg.cc/xdZcszh4/download.jpg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
      name: "Next.js",
      icon: "https://cdn.simpleicons.org/nextdotjs",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },

    {
      name: "Node.js",
      icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    },
    {
      name: "Express",
      icon: "https://cdn.simpleicons.org/express",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.simpleicons.org/mongodb/47A248",
    },
    {
      name: "WordPress",
      icon: "https://cdn.simpleicons.org/wordpress/21759B",
      bgBlack: false,
    },
  ];

  return (
    <section className="section py-10 mb-10 px-4 overflow-hidden relative">
      {/* ============ DOT PATTERN ADDED HERE ============ */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px] opacity-40 dark:opacity-30"></div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-title/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            Technologies
          </motion.h2>
          <span className="text-sm text-text block mt-2">My Tech Stack</span>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 lg:gap-5">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              animate={{
                y: index % 2 === 0 ? [0, -15, 0] : [0, 15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-24 h-24 bg-container dark:bg-darkContainer rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800 hover:border-gray-300 transition-colors cursor-pointer relative"
            >
              <div className="w-10 h-10 relative">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
