import React from "react";
import Btn from "./Btn";

function CaseStudyCard({ flag }) {
  return flag ? (
    <div className="w-full flex flex-col  items-start gap-5  lg:flex-row lg:items-center lg:gap-14">
      <img
        src="/serviceimg.png"
        alt="Service"
        className="w-[100%] h-auto md:w-[500px] xl:w-[650px]  rounded-xl z-50"
      />
      <Card />
    </div>
  ) : (
    <div className="w-full flex flex-col  items-start gap-5  lg:flex-row lg:items-center lg:gap-14">
     <Card />

      <img
        src="/serviceimg.png"
        alt="Service"
        className="w-[100%] h-auto md:w-[500px] xl:w-[650px]  rounded-xl z-50"
      />
    </div>
  );
}

export default CaseStudyCard;
const Card = () => (
  <div className="flex flex-col gap-1 lg:gap-3">
    <img
      className="w-[2rem] lg:w-[4.5rem] h-auto"
      src="/service_icon.svg"
      alt=""
    />
    <h1 className="line-clamp-2 text-[1.5rem] lg:text-[2rem] xl:text-[3rem] font-poppins font-bold">
      Website Marketing Solutions
    </h1>
    <p className="line-clamp-4 text-[#090B0E] text-sm xl:text-lg ">
      The best marketing strategy for your website will depend on your business
      goals, budget, and target audience. However, effective digital marketing
      strategies for your website often include SEO, content marketing, targeted
      social media campaigns, email marketing, and pay-per-click advertising
    </p>
    <div className='w-fit' >
    <Btn S_BtnText={"Learn More"} 
    
    onpress={()=>{
        window.location.href='/case-study/Clothing E-Commerce App Development/1'
    }}
    />

    </div>
  </div>
);
