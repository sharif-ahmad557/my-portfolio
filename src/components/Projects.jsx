"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  X,
  Layers,
  Rocket,
  AlertTriangle,
} from "lucide-react";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsPerPage = 2;

  // ============ PROJECT DATA ============
  const projectsData = [
    {
      id: 1,
      title: "SoftSphere Studio",
      image: "/assets/project1.png",
      description:
        "SoftSphere Studio is a modern and innovative app project designed to simplify creative workflows and enhance productivity.",
      techStack: ["Node.js", "Express", "React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/sharif-ahmad557/softsphere-studio",
      demo: "https://stately-bienenstitch-00f010.netlify.app/",
      challenges:
        "Managing real-time state updates across different users was challenging. Optimizing the images for faster load times required advanced caching strategies.",
      futurePlan:
        "We plan to integrate AI-based design suggestions and a dark mode toggle for better user experience.",
    },
    {
      id: 2,
      title: "Movie Master Studio",
      image: "/assets/project2.png",
      description:
        "Movie Master Studio is a full-stack movie management platform where users can browse, add, and review movies.",
      techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Firebase"],
      github: "https://github.com/sharif-ahmad557/movie-master-studio-client",
      demo: "https://movie-master-studio-client-jatb.vercel.app/",
      challenges:
        "Implementing complex search and filter queries in MongoDB was tricky. Handling authentication persistence securely was also a priority.",
      futurePlan:
        "Adding a recommendation engine based on user favorites and implementing a social sharing feature.",
    },
    {
      id: 3,
      title: "Cheesy Bites Kitchen",
      image: "/assets/project3.jpg",
      description:
        "A modern restaurant app with dynamic menu management and premium dark theme.",
      techStack: ["Next.js 14", "Tailwind CSS", "MongoDB", "Firebase Auth"],
      github: "https://github.com/sharif-ahmad557/cheesy-bites-kitchen",
      demo: "https://cheesy-bites-kitchen.vercel.app/",
      challenges:
        "Ensuring the dark theme looked consistent across all devices. Handling server-side rendering with Next.js App Router for dynamic content.",
      futurePlan: "Implementing an online ordering and payment gateway system.",
    },
    {
      id: 4,
      title: "SkillSwap",
      image: "/assets/project4.png",
      description: "Interactive web app for sharing and exchanging skills.",
      techStack: ["React", "Vite", "DaisyUI", "Firebase", "Swiper"],
      github: "https://github.com/sharif-ahmad557/local-skills-platfrom",
      demo: "https://comfy-halva-f97502.netlify.app/",
      challenges:
        "Building a real-time chat system for users to negotiate skill swaps. Managing complex form validations.",
      futurePlan:
        "Adding video call functionality for remote skill teaching sessions.",
    },
    {
      id: 5,
      title: "Corp Asset Hub",
      image: "/assets/project5.png",
      description:
        "AssetVerse is a comprehensive B2B (Business-to-Business) web application designed to streamline asset management for companies. It bridges the gap between HR Managers and Employees, allowing efficient tracking of returnable and non-returnable assets, managing inventory, and handling asset requests seamlessly.",
      techStack: [
        "React.js",
        "React Router DOM",
        "Tailwind CSS",
        "DaisyUI",
        "Firebase",
        "Axios",
        "React Hook Form",
        "React Hot Toast",
        "Recharts",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT ",
      ],
      github: "https://github.com/sharif-ahmad557/Corp-Asset-Hub-Client",
      demo: "https://corp-asset-hub-client-p1ze.vercel.app/",
      challenges:
        "Handling and visualizing large amounts of asset data without performance issues, managing different user roles (HR and employees), and ensuring secure authentication and authorization.",
      futurePlan:
        "Implement role-based admin access, add asset report export functionality (CSV/PDF), and further improve dashboard performance and overall UI/UX.",
    },
    {
      id: 6,
      title: "AI Image Generator",
      image: "/assets/project2.jpg",
      description: "SaaS application generating images from text using OpenAI.",
      techStack: ["Next.js", "OpenAI API", "Stripe", "Zustand"],
      github: "https://github.com",
      demo: "https://vercel.com",
      challenges:
        "Handling API rate limits and securing API keys on the client side.",
      futurePlan:
        "Allowing users to edit generated images and save them to a personal gallery.",
    },
  ];

  // Logic for Pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const modalImageVariant = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="portfolio"
      className="section py-20 px-4 transition-colors relative overflow-hidden min-h-screen"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px] opacity-40 dark:opacity-30"></div>

      <div className="container mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            Featured Projects
          </motion.h2>
          <span className="text-sm text-text block mt-2">
            Click on details to explore my journey
          </span>
        </div>

        {/* ============ PROJECTS GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400/png?text=Project+Image";
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-black px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gray-100"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex justify-between items-center mt-2 px-1">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Details <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============ NEW PAGINATION (PREV & NEXT) ============ */}
        {projectsData.length > projectsPerPage && (
          <div className="flex justify-center items-center gap-4 mt-8">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed text-gray-400"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm hover:shadow-md"
              }`}
            >
              <ArrowLeft size={18} /> Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium transition-all duration-300 ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white shadow-lg scale-110"
                      : "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed text-gray-400"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-md"
              }`}
            >
              Next <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* ============ PROJECT DETAILS MODAL ============ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full hover:bg-red-500 hover:text-white transition-colors z-20 shadow-lg"
              >
                <X size={20} />
              </button>

              {/* Modal Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: Image Side with Animation */}
                <div className="h-64 md:h-full bg-gray-100 dark:bg-gray-800 relative flex items-center justify-center overflow-hidden p-6 md:p-0">
                  <motion.div
                    variants={modalImageVariant}
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full"
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover md:object-center rounded-xl md:rounded-none shadow-lg md:shadow-none"
                    />
                  </motion.div>
                </div>

                {/* Right: Info Side */}
                <div className="p-6 md:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        <Layers size={18} className="text-blue-500" />{" "}
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-100 dark:border-blue-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        <AlertTriangle size={18} className="text-orange-500" />{" "}
                        Challenges Faced
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {selectedProject.challenges ||
                          "No specific challenges recorded."}
                      </p>
                    </div>

                    {/* Future Plans */}
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        <Rocket size={18} className="text-purple-500" /> Future
                        Improvements
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {selectedProject.futurePlan ||
                          "Planning to add more features soon."}
                      </p>
                    </div>
                  </div>

                  {/* ============ BUTTONS (RIGHT SIDE BOTTOM) ============ */}
                  <div className="flex gap-4 mt-8 justify-end border-t border-gray-100 dark:border-gray-800 pt-6">
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="group bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-600/50 hover:bg-blue-700 hover:-translate-y-1 hover:scale-105"
                    >
                      Live Demo{" "}
                      <ExternalLink
                        size={18}
                        className="group-hover:rotate-45 transition-transform"
                      />
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
                    >
                      GitHub{" "}
                      <Github
                        size={18}
                        className="group-hover:rotate-12 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
