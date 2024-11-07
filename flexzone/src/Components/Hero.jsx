import React from "react";
import { motion } from "framer-motion";
import fitness from "../assets/Fitness.mp4";
import Marquee from "react-fast-marquee";
import huff from "../assets/huffpost.png";
import inc from "../assets/inc.png";
import mens from "../assets/nsf.png";
import wfj from "../assets/wsj.png";
import cnn from "../assets/cnn.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-[604px]">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={fitness} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 top-16 md:top-20 lg:top-20 md:left-20 lg:left-20 left-10 items-center justify-center w-72 h-36 md:w-[700px] md:h-[200px] lg:w-[800px] lg:h-[250px] grid gap-5 md:gap-8 lg:gap-10"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-white text-3xl md:text-5xl lg:text-6xl font-bold"
          >
            Empower Your Strength
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-white text-md md:text-xl lg:text-xl w-62 md:w-[500px] lg:w-[600px]"
          >
            Transform into a healthier, stronger you with FlexZone, the ultimate fitness experience designed to help you reach your peak performance.
          </motion.p>
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-sm font-bold w-44 bg-black px-6 py-3 border border-white/50 rounded-md text-white hover:text-black hover:bg-gradient-to-r from-lime-500 via-yellow-500 to-orange-700 transition duration-300"
          >
            Buy FlexZone
          </motion.button>
        </motion.div>
      </div>
      <div className="bg-white py-3 md:py-5 lg:py-5">
        <Marquee autoFill pauseOnHover>
          <a
            href="https://www.huffpost.com/entry/the-wearables-of-summer_b_10280600"
            target="blank"
          >
            <img
              src={huff}
              alt="/"
              className="w-20 md:w-24 lg:w-32 mx-5 md:mx-8 lg:mx-10"
            />
          </a>
          <a
            href="https://www.inc.com/kate-l-harrison/this-light-emitting-wearable-can-boost-your-winter-productivity.html"
            target="blank"
          >
            <img
              src={inc}
              alt="/"
              className="w-20 md:w-24 lg:w-32 mx-5 md:mx-8 lg:mx-10"
            />
          </a>
          <a
            href="https://www.menshealth.com/technology-gear/g31249852/mens-health-sleep-awards-2020/?slide=31"
            target="blank"
          >
            <img
              src={mens}
              alt="/"
              className="w-20 md:w-24 lg:w-32 mx-5 md:mx-8 lg:mx-10"
            />
          </a>
          <a
            href="https://www.wsj.com/articles/how-to-cure-your-jet-lag-5-tools-to-outsmart-your-body-and-take-back-your-vacation-11672340432="
            target="blank"
          >
            <img
              src={wfj}
              alt="/"
              className="w-20 md:w-24 lg:w-40 mx-5 md:mx-8 lg:mx-10"
            />
          </a>
          <a
            href="https://edition.cnn.com/travel/article/jet-lag-tips/index.html"
            target="blank"
          >
            <img
              src={cnn}
              alt="/"
              className="w-20 md:w-24 lg:w-32 mx-5 md:mx-8 lg:mx-10"
            />
          </a>
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
