import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { content, sanitizeAndConvertVideo } from "../../../data";
import "react-quill/dist/quill.snow.css";

import PortfolioHero from "../../components/blog/PortfolioHero";
import { motion } from "framer-motion";
import { useGetProjectDetailQuery } from "../../apiSlice";
import Loader from "../../components/Loader";
import NotFound from "../404/NotFound";
function PortfolioDetailPage() {
  const { slug, id } = useParams();
    const { isLoading, data, error, isError } = useGetProjectDetailQuery({
      projectId: id,
    });
  return isLoading?(
        <div className="w-full h-screen flex flex-col items-center gap-16 bg-[#F5F5F5] items-center justify-center">
          <Loader />
        </div>
  ):isError ? (
    <NotFound />
  ):(
    <div className=" flex flex-col items-start gap-10 lg:gap-20 bg-[#F5F5F5]">
      <PortfolioHero
        P_BtnText={"Project"}
        H_Text={<>{data?.data?.title || slug}</>}
        img={data?.data?.mb_img}
        M_Text={
          data?.data?.description|| "We build careers by connecting talent with opportunities, fostering growth, and shaping future leaders"
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
        <motion.img
          src={data?.data?.proj_img}
          alt="Blog Image"
          className="w-full h-auto object-cover rounded-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />

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
          className="ql-editor w-full text-base md:text-lg leading-relaxed mb-10"
          dangerouslySetInnerHTML={{ __html: sanitizeAndConvertVideo(data?.data?.content) }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>
      
    </div>
  );
}

export default PortfolioDetailPage;
