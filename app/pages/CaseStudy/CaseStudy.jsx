import React, { useState } from "react";
import HeroBlog from "../../components/blog/HeroBlog";
import pkg from 'react-router-dom';
const {useParams} = pkg;
import FaqComponent from "../../components/FaqComponent";
import DOMPurify from "dompurify";
import { content } from "../../data";

import BenefitsCard from "../../components/BenefitsCard";
import Btn from "../../components/Btn";
import CaseStudyCard from "../../components/CaseStudyCard";
import { motion } from "framer-motion";
function CaseStudy() {
  return (
    <div className=" flex flex-col items-start gap-10 lg:gap-20 bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"Case Study"}
        H_Text={<>Featured case studies</>}
        M_Text={
          "We specialize in delivering custom IT projects that enhance efficiency, streamline operations, and drive business growth."
        }
        isSBtnShow={true}
        S_BtnText={"About US"}
        onpress={() => {
          window.location.href = "/about";
        }}
      />
      <div className="w-[90%] mx-auto flex flex-col items-start justify-center text-start gap-5">
        <span
          className="w-full text-[1.5rem] sm:text-[2.0rem] md:text-[2.5rem] lg:text-[3.0rem] text-center font-semibold 
    leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words capitalize"
        >
          Case Study
        </span>

        <p className="text-gray-600  text-xs sm:text-lg md:text-xl text-center leading-relaxed ">
          A case study is an in-depth analysis of a real-world project,
          showcasing challenges, strategies, and outcomes. It highlights key
          insights, data-driven decisions, and lessons learned, providing
          valuable knowledge for businesses and professionals looking to
          optimize their approaches.
        </p>
      </div>



      {/* <div className=" w-full flex items-center justify-center py-10">
        <div className="inline-flex items-center ">
          <Btn S_BtnText={"Load More"} onpress={() => setdata((previos) => [...previos, ...proData])} />
        </div>
      </div> */}
      <div className="w-[90%] mx-auto flex flex-col gap-10  lg:gap-14 ">
        {Array(5)
          .fill()
          .map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <CaseStudyCard flag={index % 2 !== 0} />
            </motion.div>
          ))}
      </div>
      <div className=" w-full flex items-center justify-center ">
        <div className="inline-flex items-center ">
          <Btn S_BtnText={"Load More"} onpress={() => {}} />
        </div>
      </div>
      <FaqComponent />
    </div>
  );
}

export default CaseStudy;
