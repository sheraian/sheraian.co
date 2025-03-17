import React from "react";
import PriceCard from "./PriceCard";

const features = [
  { icon: "/checkmarkprice.png", text: "Full-Stack Development" },
  { icon: "/checkmarkprice.png", text: "E-Commerce Store Setup" },
  { icon: "/checkmarkprice.png", text: "Up to 5 Pages" },
  { icon: "/checkmarkprice.png", text: "SEO-Ready Templates" },
  { icon: "/checkmarkprice.png", text: "Basic Maintenance" },
];
const features2 = [
    { icon: "/whiteCheckmark.svg", text: "Full-Stack Development" },
    { icon: "/whiteCheckmark.svg", text: "E-Commerce Store Setup" },
    { icon: "/whiteCheckmark.svg", text: "Up to 5 Pages" },
    { icon: "/whiteCheckmark.svg", text: "SEO-Ready Templates" },
    { icon: "/whiteCheckmark.svg", text: "Basic Maintenance" },
  ];
function PriceWidget() {
  return (
    <div
      className="w-full bg-[url('frame.png')]   flex flex-col items-center py-10 gap-8 md:gap-12 bg-cover bg-cyan-500"

    >
      <p className="inline-block bg-[#D7D5DF] p-2 px-5 rounded-full font-semibold text-[16px] text-[#4A2848]">
        Our pricing
      </p>
      <span className="text-[1.5rem] md:text-[3rem] text-white font-semibold font-poppins leading-none">
        Our popular pricing package
      </span>
      <div className="w-[95%] mx-auto flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between pt-2">
        <PriceCard imgSrc="/frame1.png" flag="text-black" features={features} />
        <PriceCard imgSrc="/frame2.png" flag="text-white" features={features2} />
        <PriceCard imgSrc="/frame1.png" flag="text-black" features={features} />
      </div>
    </div>
  );
}

export default PriceWidget;
