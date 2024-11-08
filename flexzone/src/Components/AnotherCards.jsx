import React from "react";
import { motion } from "framer-motion";
import plates from "../assets/Plates.jpg";
import dumbbell from "../assets/dumbbell.jpg";
import physique from "../assets/Physique.jpg";
import certified from "../assets/certified.png";
import safety from "../assets/safety.png";
import holistic from "../assets/holistic.png";

const AnotherCards = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-gray-300">
      <div className="p-4 sm:p-6 md:p-10 lg:p-20 xl:p-32">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-12 lg:mb-24">
          <motion.div {...fadeInUp} className="lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 lg:mb-10">
              Fitness Science
            </h3>
            <p className="text-black/60">
              Fitness Science examines body rhythms, the timing and duration of
              physical activity in individuals. Central to fitness science
              research is exercise timing and the human body's response. This
              understanding helps regulate various functions, including sleep,
              energy, mood, performance, metabolism, and the immune system.
              FlexZone focuses on applying this fitness science research to
              practical workout routines.
            </p>
          </motion.div>
          <motion.img
            {...fadeIn}
            src={plates}
            alt=""
            className="rounded-xl w-full md:w-3/4 lg:w-[600px] h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover"
          />
        </div>

        {/* Second Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center mb-12 lg:mb-24">
          <motion.img
            {...fadeIn}
            src={physique}
            alt=""
            className="rounded-xl w-full md:w-3/4 lg:w-[600px] h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover"
          />
          <motion.div {...fadeInUp} className="lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 lg:mb-10">
              Workout Plans
            </h3>
            <p className="text-black/60">
              Workout plans, also known as fitness programs, are structured
              routines designed to improve physical health. While it might seem
              overwhelming, it is a widely-used and proven approach backed by
              numerous studies and fitness experts. The consensus is that
              structured exercise routines are safe and effective in enhancing
              physical and mental health. FlexZone leads in innovative
              personalized workout plans.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 relative">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={dumbbell}
          alt=""
          className="rounded-3xl w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] object-cover brightness-50"
        />
        {/* Text Inside The Images */}
        <div className="absolute inset-0 flex flex-col justify-center text-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
          <motion.div
            {...fadeInUp}
            className="text-center mb-6 md:mb-10"
          >
            <h4 className="text-base sm:text-lg">Effective Workouts</h4>
            <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-5">Safe & Effective</h5>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 justify-between">
            {/* Card 1 */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="w-full md:w-80 mx-auto"
            >
              <img src={certified} alt="" className="size-16 mx-auto" />
              <h4 className="my-5 md:my-7 text-xl sm:text-2xl font-bold text-white/80">
                Certified Workouts
              </h4>
              <p className="font-medium text-white/80 text-center">
                FlexZone adheres to fitness standards set by the U.S. and E.U.,
                ensuring compliance with all relevant national and international
                health and safety regulations.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="w-full md:w-80 mx-auto"
            >
              <img src={safety} alt="" className="size-16 mx-auto" />
              <h4 className="my-5 md:my-7 text-xl sm:text-2xl font-bold text-white/80">
                Safe for Everyone
              </h4>
              <p className="font-medium text-white/80 text-center">
                FlexZone ensures safety by adhering to international fitness
                standards, offering routines that are certified and verified for
                effectiveness and safety by independent organizations.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="w-full md:w-80 mx-auto"
            >
              <img src={holistic} alt="" className="size-16 mx-auto" />
              <h4 className="my-5 md:my-7 text-xl sm:text-2xl font-bold text-white/80">
                Holistic Approach
              </h4>
              <p className="font-medium text-white/80 text-center">
                FlexZone employs natural methods to enhance your fitness and
                well-being. Our approach is non-invasive, utilizing 100% natural
                and effective workout techniques.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherCards;
