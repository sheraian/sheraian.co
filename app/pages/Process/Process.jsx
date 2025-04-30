import React, { useState } from "react";
import HeroBlog from "../../components/blog/HeroBlog";
import ProcessCard from "../../components/ProcessCard";
import { proData } from "../../../data";
import { motion } from "framer-motion";
import Btn from "../../components/Btn";
import FaqComponent from "../../components/FaqComponent";
function ProcessPage() {
    let [data,setdata]=useState(proData)
  return (
    <div className=" flex flex-col items-center gap-5 bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"Work Process"}
        H_Text={<>Our Software Development Process</>}
        M_Text={
          "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point."
        }
        isSBtnShow={false}
        S_BtnText={"Explore More"}
      />
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4 2xl:grid-cols-4  gap-y-5">
        {data.map((e, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
          >
            <ProcessCard item={e} index={String(index + 1).padStart(2, "0")} />
          </motion.div>
        ))}
      </div>
      <div className=" w-full flex items-center justify-center py-10">
        <div className="inline-flex items-center ">
          <Btn S_BtnText={"Load More"} onpress={() => setdata((previos) => [...previos, ...proData])} />
        </div>
      </div>
      <FaqComponent />
        
    </div>
  );
}

export default ProcessPage;
