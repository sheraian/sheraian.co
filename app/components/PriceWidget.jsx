import React from "react";
import PriceCard from "./PriceCard";
import { motion } from "framer-motion";
import { useGetPricesQuery } from "../redux/apiSlice";
import Loader from "./Loader";

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
    const {
      data,
      isLoading,
      isError,
      error,
    } = useGetPricesQuery();
  return (
    <div className="w-[100%] bg-[url('/frame.png')]   flex flex-col items-center py-10 gap-8 md:gap-12 bg-cover ">
      <p className="inline-block bg-[#D7D5DF] p-2 px-5 rounded-full font-semibold text-[16px] text-[#4A2848]">
        Our pricing
      </p>
      <span className="text-[1.5rem] md:text-[3rem] md:text-center text-white font-semibold font-poppins leading-none">
        Our popular pricing package
      </span>
   
      {isLoading?(
        <div className="p-10">
          <Loader />
        </div>
      ):data?.data?.length>0?(
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {
           data?.data
            .map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <PriceCard
                  imgSrc={index === 1 ? "/frame2.png" : "/frame1.png"}
                  flag={index === 1 ? "text-white" : "text-black"}
                  icon={index === 1 ? "/checkmarkprice.png" : "/whiteCheckmark.svg"}
                  features={_}
                />
              </motion.div>
            ))}
        </div>
      ):(
        <p className="text-gray-500 text-lg font-semibold text-center py-5">
        No Data Available
      </p>
      )

      }
      {/*  */}
    </div>
  );
}

export default PriceWidget;
