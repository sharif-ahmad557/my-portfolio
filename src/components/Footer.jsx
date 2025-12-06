"use client";

import { Facebook, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-container dark:bg-darkContainer border-t border-gray-200 dark:border-gray-800 py-10 px-4 transition-colors">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-5 text-center">
        {/* Title */}
        <div className="">
          <span className="text-3xl font-bold text-title mb-2">Sharif</span>
          <span className="text-sm text-text block">MERN Stack Developer</span>
        </div>

        <div className="flex flex-col gap-3">
          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61576389759662"
              target="_blank"
              className=" text-title rounded-xl hover:text-text transition-all duration-300 shadow-sm"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shariful-islam-web-developer/"
              target="_blank"
              className="text-title rounded-xl hover:text-text transition-all duration-300 shadow-sm"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/sharif-ahmad557"
              target="_blank"
              className=" text-title rounded-xl hover:text-text transition-all duration-300 shadow-sm"
            >
              <Github size={20} />
            </a>
          </div>
          {/* Copyright */}
          <span className="text-xs text-text block">
            &#169; Sharif. All rights reserved {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
