"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Code,
  Server,
  Database,
  ArrowRight,
  X,
  CheckCircle2,
  LayoutTemplate,
  Globe,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "Frontend\nDevelopment",
      icon: <Layout size={28} />,
      description:
        "Building responsive and interactive user interfaces using modern technologies like React.js and Next.js.",
      modalPoints: [
        "React & Next.js Development",
        "Tailwind CSS for modern styling",
        "Responsive & Mobile-first Design",
        "Performance Optimization",
        "Cross-browser Compatibility",
      ],
    },
    {
      id: 2,
      title: "Backend\nDevelopment",
      icon: <Server size={28} />,
      description:
        "Creating secure and scalable server-side applications with Node.js and Express.js.",
      modalPoints: [
        "RESTful API Development",
        "Authentication & Authorization",
        "Server-side Logic with Node.js",
        "Middleware Integration",
        "API Security Best Practices",
      ],
    },
    {
      id: 3,
      title: "Full Stack\nDevelopment",
      icon: <Code size={28} />,
      description:
        "Developing complete web applications from scratch using the MERN Stack (MongoDB, Express, React, Node).",
      modalPoints: [
        "End-to-End Web App Development",
        "Database Design & Integration",
        "Frontend & Backend Connection",
        "Deployment & Hosting Management",
        "Maintenance & Bug Fixing",
      ],
    },
    {
      id: 4,
      title: "WordPress\nDevelopment",
      icon: <LayoutTemplate size={28} />,
      description:
        "Customizing themes and building dynamic websites using WordPress and Elementor Pro.",
      modalPoints: [
        "Theme Customization & Setup",
        "Elementor Pro Page Building",
        "WooCommerce Integration",
        "Plugin Configuration",
        "Speed & SEO Optimization",
      ],
    },
    {
      id: 5,
      title: "Database\nManagement",
      icon: <Database size={28} />,
      description:
        "Designing efficient database schemas and managing data with MongoDB.",
      modalPoints: [
        "MongoDB Schema Design",
        "Data Modeling & Structuring",
        "Database Connection & Querying",
        "Data Security & Backup",
        "Performance Tuning",
      ],
    },
    {
      id: 6,
      title: "Web\nDesign",
      icon: <Globe size={28} />,
      description:
        "Creating clean, modern, and user-friendly website layouts that focus on user experience.",
      modalPoints: [
        "Modern & Clean Layouts",
        "User-Friendly Interface (UI)",
        "Focus on User Experience (UX)",
        "Wireframing & Prototyping",
        "Consistent Branding Style",
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section
      id="services"
      className="section py-20 px-4 transition-colors relative overflow-hidden"
    >
      {/* ============ BACKGROUND DECORATION ============ */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px] opacity-40 dark:opacity-30"></div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-title/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container relative z-10">
        {/* ============ SECTION TITLE ============ */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            Services
          </motion.h2>
          <span className="text-sm text-text block mt-2">What I offer</span>
        </div>

        {/* ============ SERVICES GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-container/80 backdrop-blur-sm dark:bg-darkContainer/80 p-8 pt-12 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-100 dark:border-gray-800 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Icon */}
              <div className="text-title mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-title mb-4 whitespace-pre-line leading-tight">
                {service.title}
              </h3>

              <span
                onClick={() => setSelectedService(service)}
                className="flex items-center gap-2 text-sm text-text cursor-pointer group-hover:text-title transition-colors font-medium"
              >
                View More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-title transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>

        {/* ============ MODAL (POPUP) ============ */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-container dark:bg-darkContainer w-full max-w-[500px] p-6 md:p-8 rounded-3xl shadow-2xl z-10 border border-gray-100 dark:border-gray-700"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
                >
                  <X size={20} />
                </button>

                {/* Title */}
                <h3 className="text-center text-xl md:text-2xl font-bold text-title mb-4">
                  {selectedService.title.replace("\n", " ")}
                </h3>

                {/* Description */}
                <p className="text-center text-sm text-text mb-8 px-4 leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Points List */}
                <ul className="space-y-3">
                  {selectedService.modalPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-title"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-title min-w-[18px] mt-0.5"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
