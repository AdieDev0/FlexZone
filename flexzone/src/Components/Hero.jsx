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
        {/* TEXT */}
        <div className="absolute inset-0 top-16 md:top-20 lg:top-20 md:left-20 lg:left-20 left-10 items-center justify-center w-72 h-36 md:w-[700px] md:h-[200px] lg:w-[800px] lg:h-[250px] grid gap-5 md:gap-8 lg:gap-10">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
            Empower Your Strength
          </h1>
          <p className="text-white text-md md:text-xl lg:text-xl w-62 md:w-[500px] lg:w-[600px]">
            Transform into a healthier, stronger you with FlexZone, the ultimate
            fitness experience designed to help you reach your peak performance.
          </p>
          <button className="text-sm font-bold w-44 bg-black px-6 py-3 border border-white/50 rounded-md text-white hover:text-black hover:bg-gradient-to-r from-lime-500 via-yellow-500 to-orange-700 transition duration-300">
            Buy FlexZone
          </button>
        </div>
      </div>
      {/* marquees */}
      
    </div>
  );
};

export default Hero;
