import React, { useState } from "react";
import HeroBlog from "../../components/blog/HeroBlog";
import { useParams } from "react-router-dom";
import FaqComponent from "../../components/FaqComponent";
import DOMPurify from "dompurify";
import { content } from "../../../data";
import ReactQuill from 'react-quill-new';
import "react-quill/dist/quill.snow.css"; 

function CareerDetailPage() {
  const { slug, id } = useParams();
  return (
    <div className=" flex flex-col items-center gap-16 bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"Careers"}
        H_Text={<>{slug}</>}
        M_Text={
          "We build careers by connecting talent with opportunities, fostering growth, and shaping future leaders"
        }
        isSBtnShow={false}
        S_BtnText={"Explore More"}
      />
      <div className="w-[90%] mx-auto flex flex-col items-start justify-center text-start gap-5">
        <img
          src="/frontend.png"
          alt="Blog Image"
          className="w-full h-auto max-h-[500px] object-cover rounded-xl"
        />
        <span
          className="w-full text-[1.5rem] sm:text-[2.0rem] md:text-[2.5rem] lg:text-[3.0rem] text-start font-semibold 
  leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words capitalize"
        >
          {slug}
        </span>
        <div className="ql-editor w-full  text-base md:text-lg leading-relaxed" 
     dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} 
/>

      </div>

      {/* <div className=" w-full flex items-center justify-center py-10">
        <div className="inline-flex items-center ">
          <Btn S_BtnText={"Load More"} onpress={() => setdata((previos) => [...previos, ...proData])} />
        </div>
      </div> */}
 
      <FaqComponent />
    </div>
  );
}

export default CareerDetailPage;
