import React from "react";
import CareerCard from "./CareerCard";
import { motion } from "framer-motion";

function CareerComp() {
  return (
    <div className="w-[90%] mx-auto">
      <div className="w-[100%] grid gap-10 md:gap-10 gap-y-10 md:gap-y-14 lg:gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7].map((e, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // 👈 Runs only when visible
            viewport={{ once: true, amount: 0.2 }} // 👈 Runs once when 20% of element is in view
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a href={"/career/frontend/1"}>
              <CareerCard />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CareerComp;
