import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import {motion} from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 2, y: 0 },
};
const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <div className="w-full relative h-screen"
   
    >
      {/* Background Image */}
      <img
        src={assets.theam}
        alt="theme"
        className="w-full h-full object-cover"
      />

      {/* Overlay content */}
      <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-opacity-50"
       initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.9 }}
      >
        <img
          src={assets.img3}
          alt="Logo"
          className="w-32 sm:w-36 md:w-44 h-auto mb-4"
        />
        <h1 className="prata-regular text-white font-medium text-7xl mb-9">
          Food Recipes
        </h1>
        <h2 className="prata-regular text-white font-medium text-3xl italic mb-6">
          Delicious Home-Cooked Meals Made Easy
        </h2>

        {/* Get Started Button */}
        <button
          onClick={handleGetStarted}
          className="bg-white text-black px-6 py-3 text-xl font-semibold rounded hover:bg-gray-200  transition-all duration-300 ease-in-out  hover:scale-105 active:scale-95 shadow-md"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
