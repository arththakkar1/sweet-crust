"use client";
import Image from "next/image";
import { motion, Variants } from "motion/react";

export default function Testimonials() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const testimonialVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const imageVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", damping: 15, stiffness: 200, delay: 0.3 },
    },
  };
  const quoteVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.5, ease: "easeOut" },
    },
  };
  const nameVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.7, ease: "easeOut" },
    },
  };

  const testimonials = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-d_AAvDdwOIJGtgnsZgFZpkw0oAtfdeRgMOrkm2DFXUzKiVNkpXo0WDoEo_nD98tkLG_JIm82W_17C4HlvcWZ2bya8x0vx_QyqLI4T8z0JloSFuVrMQ-JaOTWUOuFAFk0gHIIeaqMQXIARsjzsWEVd3HsAGN_0T3Z7Z_t9kp2rf_Vwl1QtNLCJwtbzE_yQyuYDa7aXqDAA5wNBH5zS9ce_Sip72hjcnRpt6fpoH_XGfrQ9v5TJD1erdRycgNMsSz35HwMr7CQ2iQ",
      alt: "Sophia Bennett",
      quote:
        "Sweet Crust's pastries are simply divine! The flavors are exquisite, and the presentation is beautiful. I highly recommend their almond croissants.",
      name: "Sophia Bennett",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-d_AAvDdwOIJGtgnsZgFZpkw0oAtfdeRgMOrkm2DFXUzKiVNkpXo0WDoEo_nD98tkLG_JIm82W_17C4HlvcWZ2bya8x0vx_QyqLI4T8z0JloSFuVrMQ-JaOTWUOuFAFk0gHIIeaqMQXIARsjzsWEVd3HsAGN_0T3Z7Z_t9kp2rf_Vwl1QtNLCJwtbzE_yQyuYDa7aXqDAA5wNBH5zS9ce_Sip72hjcnRpt6fpoH_XGfrQ9v5TJD1erdRycgNMsSz35HwMr7CQ2iQ",
      alt: "Daniel Carter",
      quote:
        "Their cakes made my birthday unforgettable! Moist, flavorful, and beautifully decorated. Sweet Crust is now my go-to bakery.",
      name: "Daniel Carter",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-d_AAvDdwOIJGtgnsZgFZpkw0oAtfdeRgMOrkm2DFXUzKiVNkpXo0WDoEo_nD98tkLG_JIm82W_17C4HlvcWZ2bya8x0vx_QyqLI4T8z0JloSFuVrMQ-JaOTWUOuFAFk0gHIIeaqMQXIARsjzsWEVd3HsAGN_0T3Z7Z_t9kp2rf_Vwl1QtNLCJwtbzE_yQyuYDa7aXqDAA5wNBH5zS9ce_Sip72hjcnRpt6fpoH_XGfrQ9v5TJD1erdRycgNMsSz35HwMr7CQ2iQ",
      alt: "Emily Rose",
      quote:
        "From breads to cookies, everything tastes homemade with a touch of love. I can't get enough of their sourdough bread!",
      name: "Emily Rose",
    },
  ];

  return (
    <motion.section
      className="py-16 md:py-24 overflow-x-hidden"
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
        What Our Customers Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 max-w-full">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={testimonialVariants}
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-[var(--light-pink)] rounded-lg p-8 shadow-md flex flex-col items-center text-center cursor-pointer overflow-hidden max-w-full"
          >
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.05, rotate: 3, borderRadius: "50%" }}
              className="overflow-hidden"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.alt}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
              />
            </motion.div>

            <motion.p
              className="text-lg text-[var(--text-secondary)] italic leading-relaxed mb-4 break-words"
              variants={quoteVariants}
            >
              &quot;{testimonial.quote}&quot;
            </motion.p>

            <motion.p className="text-lg font-semibold" variants={nameVariants}>
              {testimonial.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
