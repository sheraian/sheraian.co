import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { content } from "../../../data";
import "react-quill/dist/quill.snow.css";

import PortfolioHero from "../../components/blog/PortfolioHero";
import { motion } from "framer-motion";
function CaseStudyDetail() {
  const { slug, id } = useParams();
  return (
    <div className=" flex flex-col items-start gap-10 lg:gap-20 bg-[#F5F5F5]">
      <PortfolioHero
        P_BtnText={"Case Study"}
        H_Text={<>{slug}</>}
        M_Text={
          "We build careers by connecting talent with opportunities, fostering growth, and shaping future leaders"
        }
        isSBtnShow={false}
        S_BtnText={"Explore More"}
      />
      <motion.div
        className="w-[90%] mx-auto flex flex-col items-start justify-center text-start gap-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >


        <motion.span
          className="w-full text-[1.5rem] sm:text-[2.0rem] md:text-[2.5rem] lg:text-[3.0rem] text-start font-semibold 
        leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.0rem] break-words capitalize"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {slug}
        </motion.span>

        {/* Blog Content */}
        <motion.div
          className="ql-editor w-full text-base md:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </div>
  );
}

export default CaseStudyDetail;
