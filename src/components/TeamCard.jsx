import React from "react";
import { motion } from "framer-motion";

function TeamCard() {
  return (
    <div
      className="relative w-full lg:w-[380px] bg-white rounded-lg shadow-lg border 
     hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
     group
     "
    >
      {/* Profile Image */}
      <div className="relative">
        <img
          src="https://avatars.githubusercontent.com/u/90733116"
          alt="Muhammad Shiraz"
          className="w-full h-auto lg:h-[400px] object-cover rounded-lg"
        />
      </div>
      <motion.div
    className="absolute right-5 bottom-10 hidden group-hover:flex flex-col gap-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
     <button class="bg-[#320a28] p-2 rounded-[100px] text-white">
    <i class="fa-brands fa-facebook-f"></i>
  </button>
  <button class="bg-[#320a28] p-2 rounded-[100px] text-white">
    <i class="fa-brands fa-twitter"></i>
  </button>
  <button class="bg-[#320a28] p-2 rounded-[100px] text-white">
    <i class="fa-brands fa-linkedin-in"></i>
  </button>
  <button class="bg-[#320a28] p-2 rounded-[100px] text-white">
    <i class="fa-brands fa-instagram"></i>
  </button>
  </motion.div>
      <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-[#320a28] text-white px-4 py-2 rounded-lg text-center w-[90%]">
        <h3 className="font-bold text-lg">Muhammad Shiraz</h3>
        <p className="text-sm">Founder</p>
      </div>
    </div>
  );
}

export default TeamCard;
