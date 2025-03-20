import React from "react";
import Btn from "./Btn";
import PortfolioCard from "./PortfolioCard";

function PortfolioComp() {
  return (
    <div class="w-full">
      <div class="w-[90%] mx-auto flex items-center flex-col gap-5">
        <div class="flex items-center flex-col py-5 md:py-10 gap-2 md:gap-4">
          <p class="inline-flex  w-fit bg-[#D7D5DF] p-2 px-5 rounded-full text-sm font-semibold md:font-semibold md:text-[1rem] text-[#4A2848]">
            Recently Work
          </p>
          <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-center leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words">
          Our Latest Projects
      </span>
        </div>
        {/* <div className="w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-3 2xl:grid-cols-  gap-y-5"> */}
     
        <div className="w-[100%] gap-10 md:gap-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
        {[1,2,3,4,5,6,7].map((e)=>(  <PortfolioCard />))}
         
        </div>
      </div>
    </div>
  );
}

export default PortfolioComp;
