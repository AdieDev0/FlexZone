import React from "react";
import { motion } from "framer-motion";
import gym from "../assets/Logo.png";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
const Navbar = () => {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white shadow-lg lg:px-20 md:px-20 px-4 lg:py-4 md:py-4 py-2 w-auto lg:h-24 md:h-24 h-20 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={gym} alt="/" className="size-16 cursor-pointer" />
          <p className="hidden lg:block md:block text-2xl cursor-pointer font-bold">
            FlexZone
          </p>
        </div>
        <div className="hidden lg:block md:block">
          <ul className="flex gap-10">
            <li className="text-md font-extrabold cursor-pointer hover:text-stone-600 duration-100">
              Why FlexZone
            </li>
            <li className="text-md font-extrabold cursor-pointer hover:text-stone-600 duration-100">
              Success Stories
            </li>
            <li className="text-md font-extrabold cursor-pointer hover:text-stone-600 duration-100">
              Faqs
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:block lg:block text-sm font-bold w-44 bg-black px-6 py-3 border border-white/50 rounded-md text-white hover:text-black hover:bg-gradient-to-r from-lime-500 via-yellow-500 to-orange-700 transition duration-300"
          >
            Buy FlexZone
          </motion.button>
          <MdOutlineShoppingCart className="size-6 cursor-pointer duration-100 hover:text-stone-600" />
          {/* MENU BURGER */}
          <HiOutlineMenuAlt4
            onClick={openDrawerRight}
            className="size-7 border border-black rounded-md p-1 block md:hidden lg:hidden"
          />
          <Drawer
            placement="right"
            open={openRight}
            onClose={closeDrawerRight}
            className="p-4 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200"
          >
            {/* Sub module inside in menu burger */}
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between">
                <img src={gym} alt="/" className="size-16 cursor-pointer" />
                <IconButton onClick={closeDrawerRight}>
                  <RiCloseFill className="size-6 text-white/70" />
                </IconButton>
              </div>
              <ul className="flex flex-col gap-4 text-lg font-bold text-gray-800">
                <li className="cursor-pointer hover:text-stone-600 duration-100">
                  Home
                </li>
                <li className="cursor-pointer hover:text-stone-600 duration-100">
                  Why FlexZone
                </li>
                <li className="cursor-pointer hover:text-stone-600 duration-100">
                  Success Stories
                </li>
                <li className="cursor-pointer hover:text-stone-600 duration-100">
                  FAQ
                </li>
              </ul>
              <div className="border-t pt-4">
                <ul className="flex flex-col gap-3 text-sm text-gray-600">
                  <li className="cursor-pointer hover:text-stone-600">
                    Support Center
                  </li>
                  <li className="cursor-pointer hover:text-stone-600">
                    Contact Us
                  </li>
                  <li className="cursor-pointer hover:text-stone-600">
                    Our Story
                  </li>
                </ul>
              </div>
              <div className="flex justify-center gap-4 mt-4 text-gray-600">
                <FaFacebookF className="cursor-pointer hover:text-stone-600" />
                <FaTwitter className="cursor-pointer hover:text-stone-600" />
                <FaInstagram className="cursor-pointer hover:text-stone-600" />
                <FaLinkedin className="cursor-pointer hover:text-stone-600" />
                <FaYoutube className="cursor-pointer hover:text-stone-600" />
              </div>
              <Typography
                variant="small"
                className="text-center text-xs text-gray-500 mt-4"
              >
                Terms of Use, Privacy Policy & Cookie Policy
              </Typography>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
