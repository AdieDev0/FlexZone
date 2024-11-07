import React from "react";
import { motion } from "framer-motion";
import emote from "../assets/emotions.png";
import thunder from "../assets/lighting.png";
import love from "../assets/love-hand-drawn-heart-symbol-outline.png";
import scales from "../assets/scales.png";
import sleep from "../assets/sleep.png";
import worldwide from "../assets/worldwide.png";

const Cards = () => {
  return (
    <div className="bg-gray-200 px-4 py-8 sm:px-8 md:px-16 lg:px-32">
      <div className="text-center">
        <p className="text-4xl sm:text-5xl w-full sm:w-[1000px] mx-auto">
          FlexZone workouts support healthy circadian rhythms.
        </p>

        {/* Cards */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="shadow-md p-10 rounded-3xl grid text-left bg-gradient-to-tr from-white via-white to-orange-200"
          >
            <img src={worldwide} alt="/" className="size-10" />
            <h1 className="text-2xl font-medium">Boost mood at FlexZone.</h1>
            <p className="text-sm text-black/80">
              Seasonal Affective Disorder disrupts circadian rhythms, leading to sleep issues, fatigue, and depression.
            </p>
          </motion.div>
          {/* 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="shadow-md p-10 rounded-3xl grid text-left bg-gradient-to-tr from-white via-white to-pink-200"
          >
            <img src={sleep} alt="/" className="size-10" />
            <h1 className="text-3xl">Sleep Problems</h1>
            <p className="text-sm text-black/80">
              Misaligned circadian rhythms can cause trouble sleeping, waking up, and lead to daytime sleepiness. FlexZone's tailored workouts help you align your body clock for better rest and energy.
            </p>
          </motion.div>
          {/* 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="shadow-md p-10 rounded-3xl grid text-left bg-gradient-to-tr from-white via-white to-blue-200"
          >
            <img src={thunder} alt="/" className="size-10" />
            <h1 className="text-3xl">Fatigue</h1>
            <p className="text-sm text-black/80">
              Circadian rhythm disorders can lead to fatigue and lower energy levels. At FlexZone, our workouts help you realign your body's natural rhythm for better vitality.
            </p>
          </motion.div>
          {/* 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="shadow-md p-10 rounded-3xl grid text-left bg-gradient-to-tr from-white via-white to-light-green-200"
          >
            <img src={emote} alt="/" className="size-10" />
            <h1 className="text-3xl">Mood Disorders</h1>
            <p className="text-sm text-black/80">
              Disrupted circadian rhythms can contribute to depression, anxiety, bipolar disorder, and seasonal affective disorder. FlexZone's fitness programs aim to help stabilize your mood by promoting regular physical activity and healthy sleep patterns.
            </p>
          </motion.div>
          {/* 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="shadow-md p-10 rounded-3xl grid text-left bg-gradient-to-tr from-white via-white to-teal-200"
          >
            <img src={love} alt="/" className="size-10" />
            <h1 className="text-3xl">Shift Work Disorder</h1>
            <p className="text-sm text-black/80">
              Irregular work hours can increase the risk of cardiovascular and metabolic disorders, and cancer. FlexZone offers routines to help mitigate these risks.
            </p>
          </motion.div>
          {/* 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="shadow-md p-10 rounded-3xl grid text-left bg-gradient-to-tr from-white via-white to-purple-200"
          >
            <img src={scales} alt="/" className="size-10" />
            <h1 className="text-3xl">Weight Management</h1>
            <p className="text-sm text-black/80">
              Irregular schedules contribute to obesity and metabolic issues. FlexZone helps you stay fit.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
