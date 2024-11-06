import React from "react";
import gym from "../assets/Logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="bg-gray-100 px-20 py-4 w-full h-24 sticky z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={gym} alt="/" className="size-16" />
          <p className="text-2xl">FlexZone</p>
        </div>
        <div>
          <ul className="flex gap-10">
            <li className="text-lg">Why FlexZone</li>
            <li className="text-lg">Success Stories</li>
            <li className="text-lg">Faqs</li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-sm bg-black px-6 py-3 rounded-md text-white hover:text-black hover:bg-gradient-to-tr from-lime-500 via-yellow-500 to-orange-700 transition duration-300">Buy FlexZone</button>
          <MdOutlineShoppingCart className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
