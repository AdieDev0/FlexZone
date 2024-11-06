import React from "react";
import gym from "../assets/Logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="bg-gray-100 p-5 w-full h-10">
      <div className="flex justify-between">
        <img src={gym} alt="/" className="size-5" />
        <div>
          <ul className="flex gap-5">
            <li>Why FlexZone</li>
            <li>Success Stories</li>
            <li>Faqs</li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
            <button>Buy FlexZone</button>
            <MdOutlineShoppingCart/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
