import React from "react";
import BlogCard from "../../components/blog/BlogCard";
import Btn from "../../components/Btn";
import FaqComponent from "../../components/FaqComponent";
import { motion } from "framer-motion";

const BlogBottomSection = ({ data }) => {
  return (
    <>
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-5">
        {data.map((e, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <a href={"/blogs/Tackling the Changes of Retail Industry/1"}>
              <BlogCard item={e} />
            </a>
          </motion.div>
        ))}
      </div>
      {/* */}
      {/*  */}
    </>
  );
};

export default BlogBottomSection;
