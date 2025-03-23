import React from "react";
import BlogCard from "../../components/blog/BlogCard";
import Btn from "../../components/Btn";
import FaqComponent from "../../components/FaqComponent";
import { motion } from "framer-motion";

const BlogBottomSection = ({ data, callToBTnAction }) => {
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
              <BlogCard />
            </a>
          </motion.div>
        ))}
      </div>
      <div className=" w-full flex items-center justify-center ">
        <div className="inline-flex items-center bg-[#F5F5F5]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
          >
            <Btn
              S_BtnText={"Load More"}
              onpress={() =>
                callToBTnAction((previos) => [...previos, 1, 3, 4])
              }
            />
          </motion.div>
        </div>
      </div>
      <FaqComponent />
    </>
  );
};

export default BlogBottomSection;
