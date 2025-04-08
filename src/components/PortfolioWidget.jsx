import React from "react";
import Btn from "./Btn";
import PortfolioCard from "./PortfolioCard";
import { motion } from "framer-motion";
import { useGetPortfolioQuery } from "../apiSlice";
import { div } from "framer-motion/client";
import Loader from "./Loader";
function PortfolioWidget() {
 const {
    data: portfolio,
    isLoading: isPortfolioLoading,
    isError: isPortfolioError,
    error: portfolioError,
  } = useGetPortfolioQuery();
  
  return (
    <div class="w-full overflow-hidden lg:overflow-visible">
      <div class="w-[90%] mx-auto flex flex-col gap-5">
        <div class="">
          <p class="inline-block bg-[#D7D5DF] p-2 px-5 rounded-full text-sm font-semibold md:font-semibold md:text-[1rem] text-[#4A2848]">
            Recently Work
          </p>
        </div>
        <div class="w-[100%] flex items-center justify-between">
          <h1 class="text-black font-bold text-[1.2rem] md:text-[2.5rem]">
            Top Rated Portfolio
          </h1>
          <Btn S_BtnText={"View All"} 
          onpress={()=>
            window.location.href='/portfolio'
          }
          />
        </div>



      {isPortfolioLoading?(
          <div className="py-10">
          <Loader />
        </div>
      ):portfolio?.data?.length>=0?(
        <div className="w-[100%] gap-10 md:gap-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
        {portfolio?.data
          .map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <PortfolioCard item={_} />
            </motion.div>
          ))}
      </div>
      ):(
        <div className="py-10 text-center">
        <p className="text-lg font-semibold text-gray-600">
          Our servers are currently undergoing enhancements to serve you better. Stay tuned for updates!
        </p>
      </div>
      )

      }
  
      </div>
    </div>
  );
}

export default PortfolioWidget;
