import React from "react";
import Btn from "./Btn";

function ServiceCard() {
  return (
    <div class="w-[100%] customScreen:w-[100%] mx-auto lg:w-[400px] xl:w-[400px] 2xl:w-[430px] h-auto bg-[white] rounded-[20px] flex flex-col items-center  justify-center text-center shadow-lg gap-5 py-5 px-2 border-t-[#4A2848] border-[2px] hover:scale-105 hover:shadow-xl transition-all duration-200 ease-in-out">
      <div className="w-[52px] h-[52px] bg-[#4A2848] rounded-lg flex items-center justify-center">
        <img
          className="w-3/4 h-3/4 invert"
          src="/requirements-svgrepo-com.svg"
          alt="arrow alert"
        />
      </div>

      <h1 class="w-[90%] mx-auto text-[24px] font-semibold truncate overflow-hidden">
        Software Services 
      </h1>

      <p class="font-[16px] line-clamp-4  md:line-clamp-3 overflow-hidden text-ellipsis">
        Software services are intangible services that are delivered through the
        internet or a network connection. They provide cloud-based solutions,
        SaaS platforms, and enterprise applications for various industries.
      </p>

      <Btn S_BtnText={"Learn More"}
      extra="bg-transparent border text-black border-[#4A2848]"
      textstyle="text-black"
      />
    </div>
  );
}

export default ServiceCard;
