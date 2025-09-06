"use client";
import { motion, Variants } from "motion/react";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const highlightVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="font-script text-4xl md:text-5xl text-[var(--soft-brown)] mb-8 text-center"
        variants={titleVariants}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        About Us
      </motion.h2>

      <div className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto text-center">
        <motion.p
          variants={paragraphVariants}
          whileHover={{ x: 5 }}
          className="mb-6"
        >
          At{" "}
          <motion.span
            className="font-semibold"
            variants={highlightVariants}
            whileHover={{
              color: "var(--primary-color, #8B4513)",
              scale: 1.1,
            }}
          >
            Sweet Crust
          </motion.span>
          , we believe that baking is more than just making food it is creating
          memories. Our story began in a cozy kitchen where the aroma of freshly
          baked bread filled the air and inspired us to share that joy with
          others. What started as a small passion project soon grew into a
          full-fledged bakery, built on the values of{" "}
          <motion.span
            className="italic"
            variants={highlightVariants}
            whileHover={{
              color: "var(--primary-color, #8B4513)",
              scale: 1.05,
            }}
          >
            quality, tradition, and love
          </motion.span>
          .
        </motion.p>

        <motion.p
          variants={paragraphVariants}
          whileHover={{ x: -5 }}
          className="mb-6"
        >
          Every recipe is crafted with the finest ingredients, from golden
          butter to farm-fresh flour, ensuring that each bite melts in your
          mouth with flavor and comfort. We take pride in blending time-honored
          baking techniques with a touch of modern creativity, bringing you
          pastries, cakes, and breads that are not only delicious but also works
          of art.
        </motion.p>

        <motion.p variants={paragraphVariants} whileHover={{ x: 5 }}>
          Whether it is your morning coffee companion, a birthday celebration,
          or simply a sweet indulgence, our mission is to make every moment
          unforgettable. When you step into Sweet Crust, you are not just a
          customer, you are part of our family.
        </motion.p>
      </div>
    </motion.section>
  );
}
