"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion"; // এটা ইমপোর্ট করতে হবে

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Qualification from "@/components/Qualification";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* মেইন ওয়েবসাইট কন্টেন্ট */}
      {!isLoading && (
        <>
          <Header />
          <main className="main pt-60 md:pt-20">
            <Hero />
            <About />
            <Technologies />
            <Skills />
            <Services />
            <Qualification />
            <Projects />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ScrollUp />
        </>
      )}
    </>
  );
}
