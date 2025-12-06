"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  // Project Data
  const projectsData = [
    {
      id: 1,
      title: "Airbnb Clone 2.0",
      image: "/assets/project1.jpg",
      description:
        "A full-stack booking application with reservation system, guest management, and responsive design.",
      techStack: ["Next.js", "Tailwind", "Prisma", "MongoDB"],
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    {
      id: 2,
      title: "Miro Collaborative Board",
      image: "/assets/project2.jpg",
      description:
        "Real-time whiteboard for teams with drawing features, sticky notes, and live collaboration.",
      techStack: ["React", "Convex", "Tailwind", "Clerk"],
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    {
      id: 3,
      title: "Jira Task Manager",
      image: "/assets/project3.jpg",
      description:
        "Project management tool with Kanban board, task drag-and-drop, and team workspace features.",
      techStack: ["Next.js", "Shadcn UI", "MySQL", "Stripe"],
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    {
      id: 4,
      title: "Messenger Clone",
      image: "/assets/project4.jpg",
      description:
        "Real-time chat application with image sharing, group chat, and active status indicators.",
      techStack: ["Next.js", "Pusher", "Cloudinary", "Auth.js"],
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    {
      id: 5,
      title: "E-Commerce Dashboard",
      image: "/assets/project1.jpg",
      description:
        "Admin dashboard for managing products, orders, and customers with chart visualization.",
      techStack: ["React", "Material UI", "Recharts", "Firebase"],
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    {
      id: 6,
      title: "AI Image Generator",
      image: "/assets/project2.jpg",
      description:
        "SaaS application that generates images from text using OpenAI DALL-E API.",
      techStack: ["Next.js", "OpenAI API", "Stripe", "Zustand"],
      github: "https://github.com",
      demo: "https://vercel.com",
    },
  ];

  // Position Logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // page change function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="portfolio"
      className="section py-20 px-4 transition-colors relative overflow-hidden"
    >
      {/* ============ BACKGROUND DECORATION ============ */}
      {/* ডট প্যাটার্ন */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px] opacity-40 dark:opacity-30"></div>

      {/* ব্লার ইফেক্ট */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-title/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container relative z-10">
        {/* ============ SECTION TITLE ============ */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            Projects
          </motion.h2>
          <span className="text-sm text-text block mt-2">Recent Projects</span>
        </div>

        {/* ============ PROJECTS GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-container/80 backdrop-blur-sm dark:bg-darkContainer/80 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-800 transition-all duration-300 group"
            >
              {/* Image Area */}
              <div className="relative h-[220px] w-full rounded-2xl overflow-hidden mb-5 bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://i.ibb.co.com/bj3Qj2t5/pexels-mikhail-nilov-8654527.jpg";
                  }}
                />
              </div>

              {/* Content Area */}
              <div className="px-2">
                <h3 className="text-xl font-bold text-title mb-2">
                  {project.title}
                </h3>

                <p className="text-text text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-medium text-title px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 bg-background/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 bg-title text-background hover:bg-title/90 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-colors shadow-lg shadow-title/20"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 bg-transparent border border-title/20 text-title hover:bg-title/5 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-colors"
                  >
                    GitHub
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============ PAGINATION (1, 2, 3) ============ */}
        <div className="flex justify-center items-center gap-4 mt-16">
          {/* Page 1 */}
          <button
            onClick={() => paginate(1)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium transition-all duration-300 ${
              currentPage === 1
                ? "bg-title text-background shadow-lg scale-110"
                : "bg-transparent text-title hover:bg-title/10"
            }`}
          >
            1
          </button>

          {/* Page 2 */}
          <button
            onClick={() => paginate(2)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium transition-all duration-300 ${
              currentPage === 2
                ? "bg-title text-background shadow-lg scale-110"
                : "bg-transparent text-title hover:bg-title/10"
            }`}
          >
            2
          </button>

          {/* Page 3 */}
          <button
            onClick={() => paginate(3)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium transition-all duration-300 ${
              currentPage === 3
                ? "bg-title text-background shadow-lg scale-110"
                : "bg-transparent text-title hover:bg-title/10"
            }`}
          >
            3
          </button>

          {/* Next Button (Arrow) */}
          <button
            onClick={() => paginate(currentPage < 3 ? currentPage + 1 : 1)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-title hover:bg-title/10 transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
