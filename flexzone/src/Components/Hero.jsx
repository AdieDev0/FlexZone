import React from "react";
import fitness from "../assets/Fitness.mp4";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-[604px]">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={fitness} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 top-20 left-20 items-center justify-center w-[800px] h-[250px] grid">
          <h1 className="text-white text-6xl font-bold">
            Empower Your Strength
          </h1>
          <p className="text-white text-xl w-[600px]">
            Transform into a healthier, stronger you with FlexZone, the ultimate
            fitness experience designed to help you reach your peak performance.
          </p>
          <button className="hidden lg:block md:block text-sm font-bold w-44 bg-black px-6 py-3 border border-white rounded-md text-white hover:text-black hover:bg-gradient-to-r from-lime-500 via-yellow-500 to-orange-700 transition duration-300">
            Buy FlexZone
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
