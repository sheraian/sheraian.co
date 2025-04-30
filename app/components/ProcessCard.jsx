import React from "react";

function ProcessCard({item,index}) {
  return (
    <div className="w-full bg-white  shadow-lg shadow-black/25 flex flex-col gap-2 p-4 md:p-0 md:px-4 md:py-3 rounded-lg transition-shadow ">
      <div className="w-full flex items-center justify-between">
        <div className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] bg-[#4A2848] rounded-lg flex items-center justify-center">
          <img
            src="requirements-svgrepo-com.svg"
            alt="Dynamic Icon"
            className="w-3/4 h-3/4 invert"
          />
        </div>

        <span className="font-poppins text-[1.8rem] md:text-[2rem] font-bold outline-text">{index}</span>
      </div>
      <div >
        <h1 className="font-inter  text-xl font-semibold md:text-[18px] lmd:eading-[18px] tracking-[0%]">
          {item?.name}
        </h1>
        <span className="text-[#7A7A7A] text-xs leading-none font-medium">
          {item.des}
        </span>
      </div>
    </div>
  );
}

export default ProcessCard;
