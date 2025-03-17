import { useState } from "react";
import BlogCard from "./components/blog/BlogCard";
import BlogCat from "./components/blog/BlogCat";
import HeroBlog from "./components/blog/HeroBlog";
import { motion } from "framer-motion";
function App() {
  const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div className="flex flex-col gap-5">
      <HeroBlog />
      <div className="w-[95%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-5">
        {data.map((e, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
          >
            <BlogCard />
          </motion.div>
        ))}
      </div>

      <div style={{ height: 110 }} />
    </div>
  );
}

export default App;
