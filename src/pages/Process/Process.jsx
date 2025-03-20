import React from "react";
import HeroBlog from "../../components/blog/HeroBlog";
import ProcessCard from "../../components/ProcessCard";
import { proData } from "../../../data";

function ProcessPage() {
  return (
    <div className=" flex flex-col items-center gap-5 bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"Work Process"}
        H_Text={<>Our Software Development Process</>}
        M_Text={
          "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point."
        }
        isSBtnShow={false}
        S_BtnText={"Explore More"}
      />
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4 2xl:grid-cols-4  gap-y-5">

  {proData.map((e,index)=>(
    <ProcessCard item={e} index={String(index + 1).padStart(2, "0")}/>
  ))}
        <div style={{height:100}} />
      </div>
    </div>
  );
}

export default ProcessPage;
