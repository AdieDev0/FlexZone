import React from "react";
import { motion } from "framer-motion";
import men from "../assets/men.jpg";

const Meet = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <div className="p-10 sm:p-8 md:p-12 lg:p-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mx-auto w-full sm:w-[700px] md:w-[800px] lg:w-[900px] grid gap-5"
      >
        <motion.p
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl"
        >
          Meet FlexZone
        </motion.p>
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl"
        >
          Achieve your health goals at FlexZone with
          <span className="">
            personalized workouts and light therapy for optimal results.
          </span>
        </motion.h2>
        <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-sm font-bold w-52 bg-black px-6 py-2 border mx-auto border-white/50 rounded-md text-white hover:text-black hover:bg-gradient-to-r from-lime-500 via-yellow-500 to-orange-700 transition duration-300"
          >
            Discover More Benefits
          </motion.button>
        
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          src={men}
          alt=""
          className="w-full sm:w-auto"
        />
      </motion.div>
    </div>
  );
};

export default Meet;
