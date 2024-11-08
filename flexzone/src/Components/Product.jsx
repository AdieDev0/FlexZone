import React from "react";
import { motion } from "framer-motion";
import nike from "../assets/nike.png";
import app from "../assets/app.png";
import mobile from "../assets/mobileApp.png";

const Product = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="p-8 md:p-16 lg:p-20">
      <div className="text-center mb-8 md:mb-12">
        <motion.h5
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-sm font-extrabold mb-2 md:mb-4"
        >
          PRODUCTS
        </motion.h5>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Choose the FlexFits option that fits you
        </motion.h1>
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm font-bold w-36 md:w-44 bg-black px-6 py-3 border border-white/50 rounded-md text-white hover:text-black hover:bg-gradient-to-r from-lime-500 via-yellow-500 to-orange-700 transition-all duration-300"
        >
          Learn More
        </motion.button>
      </div>

      {/* Responsive Grid of Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20"
      >
        {/* Card 1 */}
        <motion.div
          variants={itemVariants}
          className="h-auto shadow-lg rounded-2xl p-8 text-center bg-white"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <img src={nike} alt="FlexFits Wearable" className="mx-auto mb-6 w-56" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4">FlexFits Wearable</h1>
          <p className="text-black/70 mb-6">
            Premium accessories for fitness enthusiasts seeking practical and impactful workout tools.
          </p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-sm font-bold w-32 md:w-36 bg-black px-6 py-3 border border-white/50 rounded-md text-white hover:text-black hover:bg-gradient-to-r from-lime-500 via-yellow-500 to-orange-700 transition-all duration-300"
          >
            Buy FlexFits
          </motion.button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={itemVariants}
          className="h-auto bg-gradient-to-t from-white via-orange-50 to-pink-200 rounded-2xl p-8 text-center border-b-4 border-amber-800 shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <img src={app} alt="App Lifetime" className="mx-auto mb-6 w-60" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Wearable + <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-cyan-600">App Lifetime ∞</span>
          </h1>
          <p className="text-black/70 mb-6">
            Our lifetime membership offers continuous support for your health and wellness goals.
          </p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-sm font-bold w-32 md:w-36 bg-black px-6 py-3 border border-white/50 rounded-md text-white hover:text-black hover:bg-gradient-to-r from-lime-500 via-yellow-500 to-orange-700 transition-all duration-300"
          >
            Buy FlexFits
          </motion.button>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={itemVariants}
          className="h-auto shadow-lg rounded-2xl p-8 text-center bg-white"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <img src={mobile} alt="App Annual" className="mx-auto mb-6 w-80" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Wearable + <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">App Annual</span>
          </h1>
          <p className="text-black/70 mb-6">
            Experience FlexZone's benefits with a 1-year membership for practical fitness enthusiasts.
          </p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-sm font-bold w-32 md:w-36 bg-black px-6 py-3 border border-white/50 rounded-md text-white hover:text-black hover:bg-gradient-to-r from-lime-500 via-yellow-500 to-orange-700 transition-all duration-300"
          >
            Buy FlexFits
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Product;
