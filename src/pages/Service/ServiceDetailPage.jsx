import React, { useState } from "react";
import HeroBlog from "../../components/blog/HeroBlog";
import { useParams } from "react-router-dom";
import FaqComponent from "../../components/FaqComponent";
import DOMPurify from "dompurify";
import "react-quill/dist/quill.snow.css";
import { useGetServicesDetailsQuery } from "../../apiSlice";
import Loader from "../../components/Loader";
import NotFound from "../404/NotFound";
import BenefitsComp from "../../components/BenefitsComp";

function ServiceDetailPage() {
  const { slug, id } = useParams();
  const { data, isLoading, isError, error } = useGetServicesDetailsQuery({
    id,
  });

  return isLoading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader />
    </div>
  ) : isError ? (
    <NotFound />
  ) : (
    <div className=" flex flex-col items-start gap-10 lg:gap-20 bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"Careers"}
        H_Text={<>{data?.name || slug}</>}
        M_Text={
          "We build careers by connecting talent with opportunities, fostering growth, and shaping future leaders"
        }
        isSBtnShow={false}
        S_BtnText={"Explore More"}
      />
      <div className="w-[90%] mx-auto flex flex-col items-start justify-center text-start gap-5">
        <img
          src={data?.img}
          alt="Blog Image"
          className="w-full h-auto max-h-[500px] object-cover rounded-xl"
        />
        <span
          className="w-full text-[1.5rem] sm:text-[2.0rem] md:text-[2.5rem] lg:text-[3.0rem] text-start font-semibold 
  leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words capitalize"
        >
          {data?.name || slug}
        </span>
        <div
          className="ql-editor w-full v text-base md:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.content),
          }}
        />
      </div>
      <BenefitsComp serviceId={id} />
      <FaqComponent />
    </div>
  );
}

export default ServiceDetailPage;
