"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target?.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offsetTop =
            targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleAnchorClick));
    return () =>
      links.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick)
      );
  }, []);

  return (
    <>
      <motion.main className="overflow-x-hidden w-full max-w-full">
        <div className="overflow-x-hidden w-full max-w-full">
          <Navbar />
          <Hero />
          <About />
          <Menu />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </motion.main>

      <style jsx global>{`
        html,
        body {
          scroll-behavior: smooth;
          overflow-x: hidden; /* Prevent horizontal scroll */
        }

        * {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        a:focus-visible,
        button:focus-visible {
          outline: 2px solid var(--primary-color, #8b4513);
          outline-offset: 2px;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
