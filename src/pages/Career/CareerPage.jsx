import React, { useState } from "react";
import HeroBlog from "../../components/blog/HeroBlog";
import ProcessCard from "../../components/ProcessCard";
import { proData } from "../../../data";
import { motion } from "framer-motion";
import Btn from "../../components/Btn";
import FaqComponent from "../../components/FaqComponent";
import PortfolioWidget from "../../components/PortfolioWidget";
import PortfolioComp from "../../components/PortfolioComp";
import CareerComp from "../../components/CareerComp";
function CareerPage() {
    let [data,setdata]=useState(proData)
  return (
    <div className=" flex flex-col items-center gap-16 bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"Careers"}
        H_Text={<>Careers</>}
        M_Text={
          "We build careers by connecting talent with opportunities, fostering growth, and shaping future leaders"
        }
        isSBtnShow={false}
        S_BtnText={"Explore More"}
      />
     <CareerComp />
      <div className=" w-full flex items-center justify-center py-10">
        <div className="inline-flex items-center ">
          <Btn S_BtnText={"Load More"} onpress={() => setdata((previos) => [...previos, ...proData])} />
        </div>
      </div>
      <FaqComponent />
        
    </div>
  );
}

export default CareerPage;
