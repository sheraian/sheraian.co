import React, { useState } from "react";
import HeroBlog from "../../components/blog/HeroBlog";
import ProcessCard from "../../components/ProcessCard";
import { proData } from "../../../data";
import { motion } from "framer-motion";
import Btn from "../../components/Btn";
import FaqComponent from "../../components/FaqComponent";
import PortfolioWidget from "../../components/PortfolioWidget";
import PortfolioComp from "../../components/PortfolioComp";
function PortfolioPage() {
  let [data, setdata] = useState(proData);
  return (
    <div className=" flex flex-col items-center gap-5 bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"Portfolio"}
        H_Text={<>Portfolio</>}
        M_Text={
          "We specialize in delivering custom IT projects that enhance efficiency, streamline operations, and drive business growth."
        }
        isSBtnShow={false}
        S_BtnText={"Explore More"}
      />
      <div className="w-full overflow-hidden">
      <PortfolioComp />

      </div>
   
      <FaqComponent />
    </div>
  );
}

export default PortfolioPage;
