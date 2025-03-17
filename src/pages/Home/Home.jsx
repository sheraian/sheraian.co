import React from "react";
import HeroBlog from "../../components/blog/HeroBlog";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroBlog
        P_BtnText={"Best IT Solution Provder"}
        H_Text={
          <>
            IT Consulting Services <br /> For Your Business
          </>
        }
        M_Text={"Professionally optimize interdependent intellectual introperable connect best practice. Progressivley fabricate done"}
        isSBtnShow={true}
        S_BtnText={"Explore More"}
      />
      {/* Second Section */}
      <div className="w-full pt-[100px] lg:pt-[105px] pb-[100px] lg:pb-[105px]">
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[75px]">
          {/* Image Section */}
          <img src="/assets/Home/SecondSec_Image.svg" alt="Section Image" />
          {/* Data Section */}
          <div className="flex flex-col justify-center items-start gap-[24px]">
            <div className="flex justify-center items-center px-[22px] py-[5px] bg-[#DEDAE5] rounded-[50px]">
              <p className="text-[#4A2848]">Who We Are</p>
            </div>
            <p className="font-inter font-semibold text-[56px] leading-[60px] tracking-[0%] align-centre">
              We Are Increasing <br /> Business Success <br /> With Technology
            </p>
            <p className="font-inter font-normal text-[18px] leading-[28px] tracking-[0%] align-center">
              It is a long established fact that a reader will be distracted the readable <br /> content of a page when looking at layout the point.
            </p>
            {/* Info Section */}
            <div className="flex justify-start items-center gap-[50px]">
              {/* qualities */}
              <div className="flex flex-col gap-[15px] font-inter font-medium text-[20px] leading-[28px] tracking-[0%] ">
                <div className="flex justify-start items-center gap-[10px]">
                  <img src="/assets/Home/TickIcone.svg" alt="tick" /> Problem Solving
                </div>
                <div className="flex justify-start items-center gap-[10px]">
                  <img src="/assets/Home/TickIcone.svg" alt="tick" /> Mission & Vision
                </div>
              </div>
              {/* Founder */}
              <div className="flex justify-start items-center gap-[10px]">
                <img src="/assets/Home/Founder.svg" alt="tick" />
                <div>
                  <p className="font-inter font-semibold text-[20px] leading-[32px] tracking-[0%]">M Sheraz</p>
                  <p className="font-[Plus Jakarta Sans] font-normal text-[16px] leading-[26px] tracking-[0%] text-[#726B7D]">Founder</p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex justify-center items-center gap-[11px] pl-[23px] py-[1px] pr-[1px] bg-[#4A2848] rounded-[35px] cursor-pointer group">
              <p className="font-inter font-semibold text-[18px] leading-[18px] tracking-[0%] align-middle text-white">Explore More</p>
              <img
                className="rotate-[225deg] transition-transform duration-300 ease-in-out group-hover:rotate-0"
                src="/assets/Navbar/CallToActionArrow.svg"
                alt="Explore More"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className="w-full bg-[#340831] relative overflow-hidden py-[70px]">
        <img src="/assets/Home/SecondSection/CurlyLines.svg" className=" absolute left-2" alt="curlies" />
        <img src="/assets/Home/SecondSection/DotsShapes.svg" className=" absolute right-0 bottom-0" alt="dotes" />
        {/* Main Content */}
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-[75px]">
          {/* Data Section */}
          <div className="flex flex-col justify-center items-start gap-[24px]">
            <div className="flex justify-center items-center px-[22px] py-[5px] bg-[#DEDAE5] rounded-[50px] text-[#4A2848]">
              <p>Work Process</p>
            </div>
            <p className="font-inter font-semibold text-[56px] leading-[60px] tracking-[0%] align-centre text-white">
              Our software <br /> development <br /> process
            </p>
            <p className="font-inter font-normal text-[18px] leading-[28px] tracking-[0%] align-center text-white">
              It is a long established fact that a reader will be distracted <br /> the readable content of a page when looking at layout the <br />{" "}
              point.
            </p>
            <div className="flex justify-center items-center gap-[11px] pl-[23px] py-[1px] pr-[1px] bg-[white] rounded-[35px] cursor-pointer hover:scale-105 group">
              <p className="font-inter font-semibold text-[18px] leading-[18px] tracking-[0%] align-middle text-[#4A2848]">Explore More</p>
              <img
                className="rotate-[225deg] transition-transform duration-300 ease-in-out group-hover:rotate-0"
                src="/assets/Home/SecondSection/Purple_Icone.svg"
                alt="Explore More"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
