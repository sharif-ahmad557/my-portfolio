"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Send, Linkedin, Facebook } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully! ✅");
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again later. ❌");
        }
      );
  };

  return (
    <section
      id="contact"
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
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            Get in Touch
          </motion.h2>
          <span className="text-sm text-text block mt-2">Contact Me</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr] gap-10 items-start">
          {/* ============ LEFT SIDE: INFO CARDS ============ */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-title text-center mb-2">
              Talk to me
            </h3>

            {/* Email Card */}
            <ContactCard
              icon={<Mail size={24} />}
              title="Email"
              data="z4codelearn@gmail.com"
              link="mailto:z4codelearn@gmail.com"
              variants={fadeUp}
            />

            {/* LinkedIn Card */}
            <ContactCard
              icon={<Linkedin size={24} />}
              title="LinkedIn"
              data="Shahriar Kabir (Zafor)"
              link="https://www.linkedin.com/in/shahriar-kabir-z4"
              variants={fadeUp}
            />

            {/* Facebook Card */}
            <ContactCard
              icon={<Facebook size={24} />}
              title="Facebook"
              data="Shariar Kabir"
              link="https://www.facebook.com/shariarkabirz4"
              variants={fadeUp}
            />
          </div>

          {/* ============ RIGHT SIDE: FORM ============ */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-title text-center mb-6">
              Write me your project
            </h3>

            <motion.form
              ref={form}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              {/* Name Input */}
              <div className="relative group">
                <label className="absolute -top-3 left-4 bg-background/90 px-2 text-sm text-text transition-colors z-10 rounded-md">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Insert your name"
                  className="w-full h-14 rounded-2xl border border-gray-300 dark:border-gray-700 bg-container/50 backdrop-blur-sm px-6 text-sm text-title outline-none focus:border-title transition-all relative z-0 placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <label className="absolute -top-3 left-4 bg-background/90 px-2 text-sm text-text transition-colors z-10 rounded-md">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Insert your email"
                  className="w-full h-14 rounded-2xl border border-gray-300 dark:border-gray-700 bg-container/50 backdrop-blur-sm px-6 text-sm text-title outline-none focus:border-title transition-all relative z-0 placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Project/Message Input */}
              <div className="relative group">
                <label className="absolute bg-background/90 -top-3 left-4 px-2 text-sm text-text transition-colors z-10 rounded-md">
                  Project
                </label>
                <textarea
                  name="project"
                  placeholder="Write your project"
                  className="w-full h-40 rounded-2xl border border-gray-300 dark:border-gray-700 bg-container/50 backdrop-blur-sm p-6 text-sm text-title outline-none resize-none focus:border-title transition-all relative z-0 placeholder:text-gray-400"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="text-background hover:opacity-90 w-max group mt-2 bg-title hover:bg-text px-8 py-4 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-lg shadow-title/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && (
                  <Send
                    size={18}
                    className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
                  />
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Small Card Component
const ContactCard = ({ icon, title, data, link, variants }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="bg-container/80 backdrop-blur-sm dark:bg-darkContainer/80 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 text-center shadow-sm hover:shadow-lg transition-all w-full group"
    >
      <div className="text-title mb-2 flex justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="font-bold text-title text-sm mb-1">{title}</h4>
      <span className="text-xs text-text block mb-3 break-all">{data}</span>
      <a
        href={link}
        target="_blank"
        className="text-xs font-medium text-title inline-flex items-center gap-1 hover:gap-2 transition-all group-hover:text-primary"
      >
        Write me{" "}
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </motion.div>
  );
};

export default Contact;
