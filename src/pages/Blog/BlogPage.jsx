import { useState } from "react";

import { motion } from "framer-motion";
import HeroBlog from "../../components/blog/HeroBlog";
import BlogCard from "../../components/blog/BlogCard";
import Btn from "../../components/Btn";
import FaqComponent from "../../components/FaqComponent";

function BlogPage() {
  const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


  return (
    <div className="flex flex-col gap-10">
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
      <div className="w-full flex items-center justify-center ">
        <div className="inline-flex items-center bg-[#F5F5F5]">
          <Btn
            S_BtnText={"Load More"}
            onpress={() => setdata((previos) => [...previos, 1, 3, 4])}
          />
        </div>
      </div>
   <FaqComponent />
    </div>
  );
}

export default BlogPage;
