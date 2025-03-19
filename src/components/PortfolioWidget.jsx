import React from "react";
import Btn from "./Btn";
import PortfolioCard from "./PortfolioCard";

function PortfolioWidget() {
  return (
    <div class="w-full">
      <div class="w-[90%] mx-auto flex flex-col gap-5">
        <div class="">
          <p class="inline-block bg-[#D7D5DF] p-2 px-5 rounded-full text-sm font-semibold md:font-semibold md:text-[1rem] text-[#4A2848]">
            Recently Work
          </p>
        </div>
        <div class="w-[100%] flex items-center justify-between">
          <h1 class="text-black font-bold text-[1.2rem] md:text-[2.5rem]">Top Rated Portfolio</h1>
          <Btn S_BtnText={"View All"} />
        </div>
        <div className="w-[100%] gap-10 md:gap-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </div>
  );
}

export default PortfolioWidget;
