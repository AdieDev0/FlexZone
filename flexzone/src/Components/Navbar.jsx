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

const Navbar = () => {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="lg:px-20 md:px-20 px-4 lg:py-4 md:py-4 py-2 w-auto lg:h-24 md:h-24 h-20 sticky z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={gym} alt="/" className="size-16 cursor-pointer" />
          <p className="hidden lg:block md:block text-2xl cursor-pointer font-bold">
            FlexZone
          </p>
        </div>
        <div className="hidden lg:block md:block">
          <ul className="flex gap-10">
            <li className="text-lg font-extrabold  cursor-pointer hover:text-stone-600 duration-100">
              Why FlexZone
            </li>
            <li className="text-lg font-extrabold  cursor-pointer hover:text-stone-600 duration-100">
              Success Stories
            </li>
            <li className="text-lg font-extrabold  cursor-pointer hover:text-stone-600 duration-100">
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
            className="p-4"
          >
            <div className="mb-6 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                Material Tailwind
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawerRight}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <Typography color="gray" className="mb-8 pr-4 font-normal">
              Material Tailwind features multiple React and HTML components, all
              written with Tailwind CSS classes and Material Design guidelines.
            </Typography>
            <div className="flex gap-2">
              <Button size="sm" variant="outlined">
                Documentation
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
