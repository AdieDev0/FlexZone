import React from "react";
import { motion, useAnimation } from "framer-motion";
import object1 from "../assets/object1.png";
import object2 from "../assets/object2.png";
import object3 from "../assets/object3.png";
import object4 from "../assets/object4.png";

const Works = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }, [controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-t from-white via-gray-200 to-gray-300 p-6 md:p-12 lg:p-20">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          className="text-center text-3xl md:text-4xl lg:text-6xl font-light mb-4 md:mb-6 lg:mb-10"
        >
          How it works
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mx-auto mb-10">
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="bg-gradient-to-tr from-gray-100 via-gray-200 to-pink-400 flex justify-between rounded-3xl px-5 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 items-center shadow-md"
          >
            <div className="grid gap-2 md:gap-3 lg:gap-5 lg:w-80 md:w-60 w-52">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-pink-500 to-pink-700">
                01
              </h1>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">
                Unlock Your Peak Performance
              </h3>
              <p className="text-[10px] md:text-xs lg:text-sm">
                Join the Flex Zone to understand your body's optimal workout
                times. Learn how syncing your exercise routine with your natural
                energy peaks can enhance your gains and recovery. Discover your
                body's unique exercise rhythm and how it impacts your overall
                fitness journey.
              </p>
            </div>
            <div>
              <img
                src={object1}
                alt="Description of object1"
                className="w-auto h-40 md:h-40 lg:h-72"
              />
            </div>
          </motion.div>
          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="bg-gradient-to-r from-gray-100 via-lime-100 to-lime-400 flex justify-between rounded-3xl px-5 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 items-center shadow-md"
          >
            <div className="grid gap-2 md:gap-3 lg:gap-5 lg:w-80 md:w-60 w-52">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-lime-500 to-lime-700">
                02
              </h1>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">
                Achieve Consistency
              </h3>
              <p className="text-[10px] md:text-xs lg:text-sm">
                Create a workout routine that syncs with your body's natural
                rhythms. Consistency is crucial for achieving long-term success
                and making significant progress in your fitness journey. Join
                FlexZone to optimize your training schedule and elevate your
                performance.
              </p>
            </div>
            <div>
              <img
                src={object2}
                alt="Description of object2"
                className="w-auto h-40 md:h-40 lg:h-72 object-fill"
              />
            </div>
          </motion.div>
          {/* Box 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="bg-gradient-to-tr from-gray-100 via-gray-200 to-brown-400 flex justify-between rounded-3xl px-5 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 items-center shadow-md"
          >
            <div className="grid gap-2 md:gap-3 lg:gap-5 lg:w-80 md:w-60 w-52">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-brown-500 to-brown-700">
                03
              </h1>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">
                Join FlexZone
              </h3>
              <p className="text-[10px] md:text-xs lg:text-sm">
                Revitalize your body and mind with natural light exposure that
                mimics a sunny day. This gentle blue light stimulates your eyes,
                boosts your mood, and raises your energy levels, helping you
                power through your workouts with increased vigor and positivity.
              </p>
            </div>
            <div>
              <img
                src={object3}
                alt="Description of object1"
                className="w-auto h-36 md:h-40 lg:h-72"
              />
            </div>
          </motion.div>
          {/* Box 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="bg-gradient-to-tr from-gray-100 via-gray-200 to-teal-400 flex justify-between rounded-3xl px-5 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 items-center shadow-md"
          >
            <div className="grid gap-2 md:gap-3 lg:gap-5 lg:w-80 md:w-60 w-52">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-teal-500 to-teal-700">
                04
              </h1>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">
                Stay In-Sync and Thrive
              </h3>
              <p className="text-[10px] md:text-xs lg:text-sm">
                FlexZone will keep you motivated throughout the year, adapting
                to seasonal and lifestyle changes. Experience lasting
                improvements as you achieve a healthier, happier you with a
                consistent and effective workout routine.
              </p>
            </div>
            <div>
              <img
                src={object4}
                alt="Description of object2"
                className="w-auto h-40 md:h-40 lg:h-72 object-fill"
              />
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center items-center">
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-sm font-bold w-44 bg-black px-6 py-3 border border-white/50 rounded-md text-white hover:text-black hover:bg-gradient-to-r from-lime-500 via-yellow-500 to-orange-700 transition duration-300"
          >
            {" "}
            Work With Us{" "}
          </motion.button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Works;
