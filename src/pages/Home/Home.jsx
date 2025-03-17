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
      <div className="w-full pt-[100px] lg:pt-[120px]">
        <div className="w-[95%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-[75px]">
          {/* Image Section */}
          <img src="/assets/Home/SecondSec_Image.svg" alt="Section Image" />
          {/* Data Section */}
          <div className="flex flex-col justify-center items-start gap-[24px]">
            <div className="flex justify-center items-center px-[22px] py-[5px]">
              <p>Who We Are</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
