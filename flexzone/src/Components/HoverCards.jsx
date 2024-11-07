import React from "react";
import { motion } from "framer-motion";
import pic1 from "../assets/gympic1.jpg";
import pic2 from "../assets/gympic3.jpg";
import pic3 from "../assets/gympic2.jpg";

const HoverCards = () => {
  return (
    <div className="bg-gray-300 px-5 md:px-10 lg:px-32 py-20">
      <div className="text-center mb-10">
        <p className="font-extrabold text-sm mb-5">HOW IT WORKS</p>
        <h5 className="text-2xl md:text-3xl lg:text-5xl mx-auto w-full lg:w-[1000px]">
          Optimize your fitness with personalized workouts and light therapy.
        </h5>
      </div>
      {/* Responsive Card Container */}
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {[{
            image: pic1,
            title: "Targeted workouts stimulate key muscle groups in your body.",
            description: "FlexZone helps you achieve your fitness goals effectively. This supports a vital process in your body that boosts energy levels. Like natural sunlight, FlexZone’s targeted workouts invigorate your body and stimulate muscle fibers. This sends a powerful signal through your nervous system to enhance your overall physical performance and well-being."
          },
          {
            image: pic3,
            title: "Regular exercise boosts your overall body function",
            description: "Your body operates through synchronized processes. FlexZone's routines help optimize your body's natural cycles, known as your biological clock. This clock helps manage various body systems (e.g., your heart or liver). FlexZone enhances your fitness through routines that support your body’s natural cycles, improving overall health."
          },
          {
            image: pic2,
            title: "Harmonize your fitness routine and lifestyle for optimal health",
            description: "Your sleep, heart rate, blood pressure, immune system, metabolism, body temperature, hormones, and mood are all affected by your fitness routine. FlexZone aligns your exercise regimen with your daily activities, enhancing your physical and mental well-being. Synchronizing your workout schedule with your lifestyle leads to numerous health benefits."
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border border-black w-full md:w-72 lg:w-96 h-[500px] lg:h-[600px] rounded-xl relative overflow-hidden hover:w-full lg:hover:w-[500px] transition-all duration-300 ease-in-out"
          >
            <img
              src={card.image}
              alt=""
              className="object-cover w-full h-full rounded-t-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h5 className="font-bold text-lg lg:text-xl mb-2 text-left absolute top-60 lg:top-80 px-5 md:px-8 lg:px-10">
                {card.title}
              </h5>
              <p className="text-xs lg:text-sm text-white text-left absolute top-80 lg:top-96 px-5 md:px-8 lg:px-10">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HoverCards;
