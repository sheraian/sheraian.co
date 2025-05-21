import React from "react";

function BenefitsCard({ item,flag }) {
  return flag ? (
    <div className="w-full flex flex-col items-start gap-5 lg:flex-row lg:items-start lg:gap-14">
    <img
      src={item?.img}
      alt="Service"
      className="w-full md:w-[500px] xl:w-[650px] max-h-[400px] object-cover rounded-xl z-50 shrink-0"
    />
    <Card item={item} />
  </div>
  
  ) : (
    <div className="w-full flex flex-col  items-start gap-5  lg:flex-row lg:items-center lg:gap-14">
    <Card item={item} />
      
       <img
      src={item?.img}
      alt="Service"
      className="w-full md:w-[500px] xl:w-[650px] max-h-[400px] object-cover rounded-xl z-50 shrink-0"
    />
    </div>
  );
}

export default BenefitsCard;
const Card = ({item}) => (
  <div className="flex flex-col gap-1 lg:gap-3">
    <img
      className="w-[2rem] lg:w-[4.5rem] h-auto"
      src="/service_icon.svg"
      alt=""
    />
    <h1 className="text-[1.5rem] lg:text-[2rem] xl:text-[3rem] font-poppins font-bold">
      {item?.title}
    </h1>
    <p className=" text-[#090B0E] text-sm xl:text-lg ">{item?.short_des}
    </p>
  </div>
);
