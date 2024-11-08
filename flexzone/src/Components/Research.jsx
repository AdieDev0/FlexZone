import React from "react";
import { motion } from "framer-motion";
import anytime from "../assets/anytime.png";
import classpass from "../assets/classpass.png";
import fitnessfirst from "../assets/fitnessfirst.png";
import incent from "../assets/incent.png";
import goldgym from "../assets/goldgym.png";

const Research = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-6 md:p-10">
      <div className="text-center w-full h-full">
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm font-bold mb-4 md:mb-10"
        >
          RESEARCH-FOCUSED
        </motion.h4>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-3xl w-full md:w-96 mx-auto mb-6 md:mb-10"
        >
          Clinically-backed health and wellness benefits
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full md:w-[800px] mx-auto text-black/70 text-sm mb-6 md:mb-10 "
        >
          FlexZone is a science-driven gym concept guided by some of the world's
          foremost fitness experts and researchers. As pioneers in the field of
          workout optimization and wellness, we are committed to revolutionizing
          the way you train...
        </motion.p>
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-sm font-bold w-36 md:w-44 bg-black px-6 py-3 border border-white/50 rounded-md text-white hover:text-black hover:bg-gradient-to-r from-lime-500 via-yellow-500 to-orange-700 transition duration-300"
        >
          Learn More
        </motion.button>
      </div>

      {/* Responsive Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 px-4 md:px-24"
      >
        {[{
          href: "https://www.anytimefitness.ph/",
          img: anytime,
          text: "Optimizing workout routines and improving energy levels for gym-goers.",
        },
        {
          href: "https://www.fitnessfirst.com/ph/en",
          img: fitnessfirst,
          text: "Using science-backed methods to improve workouts and muscle recovery.",
        },
        {
          href: "https://goldsgym.com.ph/",
          img: goldgym,
          text: "Using proven methods to boost vitality and reduce workout fatigue.",
        },
        {
          href: "https://classpass.com/corporate-wellness",
          img: classpass,
          text: "Tailored workouts to boost energy and manage fatigue.",
        },
        {
          href: "https://incentfit.com/wellness-word/corporate-gym-memberships-how-to-set-them-up/",
          img: incent,
          text: "Boost workout efficiency and maintain energy.",
        }].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="shadow-md shadow-blue-200 p-5 rounded-2xl text-center"
          >
            <a href={item.href} target="blank">
              <img src={item.img} alt="" className="w-20 md:w-28 mx-auto mb-4" />
            </a>
            <p className="text-sm w-48 text-center mx-auto">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Research;
