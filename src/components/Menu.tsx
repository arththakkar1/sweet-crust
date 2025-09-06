"use client";
import Image from "next/image";
import { motion, Variants } from "motion/react";

type MenuItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const menuItems: MenuItem[] = [
  {
    title: "Delicate Pastries",
    description:
      "Flaky, buttery layers filled with rich cream or fruit – perfect for a light indulgence any time of the day.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwSfLQO1a6kds_npA4LpRD5AlYYKmtTe6bJd6TrDD5w4EzkMb0Phgml2hD_rVr-Yad9sojZq5-pf-lkonuOuKKdgzt4dxPKAk5-06Bt2jBMqjq0x2ryzGILY-OIt_FQd4zvMF7Pgv7Vyi9tm0Nsg-S7VjAnkWni2cWgp2l5BrNRealCIAUBUbJlAq0ePa8Hbf6gCapXMIww4qzy3epF0RzVqiwQl80rg3Cpl_zcZ_IjLmFfd2OAup35hAE0IuscgbTjj-3rmu9D3g",
    alt: "Delicate Pastries",
  },
  {
    title: "Celebration Cakes",
    description:
      "Handcrafted, custom-designed cakes made with love to make birthdays, weddings, and milestones unforgettable.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnusDRQX3ZY3sfJX-TOdXG6sHlO_Jgt3_xPaNo0z_HLW6FyAIkZhatWZ6BvkSeKaXV4u13-IlUZ59GKKtZJ9hOh_opNX94v24M5zVJgBrPG5Kp7RMSO2Ncp-86hjZuMhdRIfZml6qOUx4SiYyapCcUsubDzWxGEmJ2W7RBvKBs0CoVyOuHCEf8gIMNO3SGHjN-stpYmlR9Bfj_AtgqpDf1rTHiPoZuIxLl450OC8yKoWd6kStqQ5ZsxspX_UnIZjYzbgHB0oddfLo",
    alt: "Celebration Cakes",
  },
  {
    title: "Artisan Breads",
    description:
      "Baked fresh every morning, our loaves boast a golden crust, airy crumb, and wholesome flavor that warms the soul.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQtaYR4OffLe61QEauXXHbf2vLZL2h3kNj4w1FDe3XBU5vyMOTzUKz1eWufGg4i9E4GQlhtzqryFF1_YliL9Uq_4Dg4h597sKodemxRwsTcmhLcVxyi9lagOECuMrh1SEFm2QMWWBab1Y9U26MIgKDBPA3A-rmToO1L75v9c_qOY1PtzjwMgTC3Nzp9dCo_ImEy_JcWCWa2W9OycXJ2paG7f2TJY1vauRxWlqcbG2A35tYW-Jz2T8vokv-shCufT49zM1JBGawVeI",
    alt: "Artisan Breads",
  },
  {
    title: "Signature Cookies",
    description:
      "Soft in the center, crisp on the edges, and loaded with irresistible flavors that keep you coming back for more.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApM1PtMphJ_CqrI35Kycp2TkkL-XUrtCpm-Mz5l1BHyXaQ3SNdgoiiWEVlmZB2fzQwKLPuyLfJvtIPtjbRao8so45kboIboPQQgTk7v9udEN_KwQorZ9Slx0cumfX4vu_k3QLk2B9G8As0KbZLc5Na1IoaVQOV1ryLWcFobPmTrYJsHzTa5riRAWt0pAxXzgmylCg1tpXfIgVeA_SPMXDefLhBQjVT2sOCHXlkh8nNIJEIz-0-9WQGRlOvIWBEQuCLLluYqr37zXM",
    alt: "Signature Cookies",
  },
];

export default function Menu() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.9,
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

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="menu"
      className="py-16 md:py-24 bg-[var(--cream)] rounded-3xl"
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
        Our Specialties
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {menuItems.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              rotateY: 5,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center text-center bg-amber-50 text-amber-900 border-amber-200 cursor-pointer"
          >
            <motion.div
              className="overflow-hidden rounded-xl w-full h-48 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={imageVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={300}
                  height={200}
                  className="rounded-xl object-cover w-full h-48"
                />
              </motion.div>
            </motion.div>

            <motion.h3
              className="text-xl font-semibold mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{
                color: "var(--primary-color, #8B4513)",
                scale: 1.05,
              }}
            >
              {item.title}
            </motion.h3>

            <motion.p
              className="text-base text-[var(--text-secondary)]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
