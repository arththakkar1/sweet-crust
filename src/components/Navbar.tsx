"use client";
import React, { useState, useEffect } from "react";
import { motion, Variants } from "motion/react";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "menu", label: "Menu" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll hide/show
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarVariants: Variants = {
    hidden: { y: -120, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants: Variants = {
    hover: { scale: 1.05, y: -2, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[var(--background-color)] bg-opacity-90 backdrop-blur-md border-b border-b-[var(--beige)] px-4 md:px-10 py-4 shadow-lg overflow-hidden"
      variants={navbarVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Logo */}
      <motion.div className="flex items-center gap-3">
        <motion.svg
          className="h-8 w-8 text-[var(--primary-color)] cursor-pointer"
          fill="currentColor"
          viewBox="0 0 48 48"
          whileHover={{
            rotate: 360,
            scale: 1.1,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          <path d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" />
        </motion.svg>
        <h2 className="font-script text-2xl font-bold">Sweet Crust</h2>
      </motion.div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <motion.div key={item.id} className="relative">
            <motion.a
              href={`#${item.id}`}
              onClick={() => setActiveLink(item.id)}
              className={`text-lg transition-colors duration-300 ${
                activeLink === item.id
                  ? "text-[var(--primary-color)]"
                  : "text-[var(--text-secondary)]"
              }`}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {item.label}
            </motion.a>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary-color)] origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeLink === item.id ? 1 : 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Order Button */}
      <motion.button
        className="hidden md:block bg-[var(--primary-color)] text-white font-bold py-3 px-6 rounded-lg shadow-md overflow-hidden"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5, ease: "easeOut" },
        }}
      >
        Order Online
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
