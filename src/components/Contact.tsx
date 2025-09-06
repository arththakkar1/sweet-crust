"use client";
import { motion, Variants } from "motion/react";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const contactInfoVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const inputVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 200, delay: 0.5 },
    },
  };
  const infoItemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: ["easeOut"] as const },
    },
  };

  const mapVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: ["easeOut"], delay: 0.3 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-16 md:py-24 bg-[var(--cream)] rounded-3xl overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="font-script text-4xl md:text-5xl text-[var(--soft-brown)] mb-12 text-center"
        variants={titleVariants}
        whileHover={{
          scale: 1.05,
          color: "var(--primary-color, #8B4513)",
          transition: { duration: 0.3 },
        }}
      >
        Get in Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-8 lg:px-16 overflow-hidden">
        {/* Contact Form */}
        <div className="overflow-hidden rounded-xl">
          <motion.form
            className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-6"
            variants={formVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.input
              type="text"
              placeholder="Your Name"
              className="border border-[var(--beige)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              required
              variants={inputVariants}
              whileFocus={{
                scale: 1.02,
                borderColor: "var(--primary-color, #8B4513)",
                transition: { duration: 0.2 },
              }}
              whileHover={{ scale: 1.01 }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="border border-[var(--beige)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              required
              variants={inputVariants}
              whileFocus={{
                scale: 1.02,
                borderColor: "var(--primary-color, #8B4513)",
                transition: { duration: 0.2 },
              }}
              whileHover={{ scale: 1.01 }}
            />
            <motion.textarea
              placeholder="Your Message"
              rows={5}
              className="border border-[var(--beige)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              required
              variants={inputVariants}
              whileFocus={{
                scale: 1.02,
                borderColor: "var(--primary-color, #8B4513)",
                transition: { duration: 0.2 },
              }}
              whileHover={{ scale: 1.01 }}
            />
            <motion.button
              type="submit"
              className="bg-[var(--primary-color)] text-white font-bold py-3 px-6 rounded-lg hover:bg-[var(--soft-brown)] transition-colors duration-300 shadow-md"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0px 10px 20px rgba(139, 69, 19, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col gap-6 text-lg text-[var(--text-secondary)] overflow-hidden"
          variants={contactInfoVariants}
        >
          <motion.p
            variants={infoItemVariants}
            whileHover={{ color: "var(--primary-color, #8B4513)" }}
          >
            <strong>Address:</strong> 123 Sweet Street, Dessertville
          </motion.p>
          <motion.p
            variants={infoItemVariants}
            whileHover={{ color: "var(--primary-color, #8B4513)" }}
          >
            <strong>Phone:</strong> (123) 456-7890
          </motion.p>
          <motion.p
            variants={infoItemVariants}
            whileHover={{ color: "var(--primary-color, #8B4513)" }}
          >
            <strong>Email:</strong> hello@sweetcrust.com
          </motion.p>

          <motion.iframe
            title="Sweet Crust Location"
            className="rounded-xl shadow-md w-full h-64 md:h-80 max-w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151!2d144.9630576!3d-37.8141079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzUxLjAiUyAxNDTCsDU3JzQ3LjAiRQ!5e0!3m2!1sen!2sus!4v1633412142000!5m2!1sen!2sus"
            loading="lazy"
            allowFullScreen
            variants={mapVariants}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
