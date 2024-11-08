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
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="bg-gray-300">
      <div className="p-4 sm:p-8 md:p-16 lg:p-32">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-12 lg:mb-24">
          <motion.div {...fadeInUp} className="lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 lg:mb-10">
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
            className="rounded-xl w-full lg:w-[600px] h-[300px] lg:h-[500px] object-cover"
          />
        </div>

        {/* Second Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center mb-12">
          <motion.img
            {...fadeIn}
            src={physique}
            alt=""
            className="rounded-xl w-full lg:w-[600px] h-[300px] lg:h-[500px] object-cover"
          />
          <motion.div {...fadeInUp} className="lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 lg:mb-10">
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
      <div className="bg-gray-300">
        {/* Bottom Section */}
        <div className="relative overflow-hidden rounded-3xl mx-4 bg-gray-900">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={dumbbell}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black opacity-60 rounded-3xl"></div>

          <div className="relative flex flex-col items-center text-white p-8 sm:p-12">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h4 className="text-sm font-semibold">PROVEN TECHNOLOGY</h4>
              <h5 className="text-2xl sm:text-3xl font-bold mt-2">
                Safe & Natural
              </h5>
            </motion.div>

            <div className="flex flex-col gap-8 w-full max-w-md">
              {/* Card 1 */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <img
                  src={certified}
                  alt="Certified Technology Icon"
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="text-lg font-semibold">
                    Certified Technology
                  </h4>
                  <p className="text-sm text-white/80">
                    FlexZone complies with relevant fitness standards, ensuring
                    quality and safety in all our programs.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <img src={safety} alt="Safety Icon" className="w-10 h-10" />
                <div>
                  <h4 className="text-lg font-semibold">Safe for Everyone</h4>
                  <p className="text-sm text-white/80">
                    All programs are verified for safety, adhering to the
                    highest standards in fitness.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <img
                  src={holistic}
                  alt="Holistic Approach Icon"
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="text-lg font-semibold">Holistic Approach</h4>
                  <p className="text-sm text-white/80">
                    We use natural and effective techniques, focusing on your
                    overall well-being and health.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherCards;
