import { motion } from "framer-motion";
import TeamCard from "./TeamCard";


export default function TeamSection() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
      {Array(5).fill().map((_, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <TeamCard />
        </motion.div>
      ))}
    </div>
  );
}
