import React, { useEffect, useState } from "react";
import Btn from "./Btn";
import PortfolioCard from "./PortfolioCard";
import { motion } from "framer-motion";
import { useGetPortfolioQuery } from "../apiSlice";
import Loader from "./Loader";

function PortfolioComp() {
  const [page, setPage] = useState(1);
  const limit = 3;
  const [portfolio, setPortfolio] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false); // New state to track "Load More" loading state
  
  const {
      data: PortfolioData,
      isLoading: isPortfolioLoading,
      isError: isPortfolioError,
      error: portfolioError,
    } = useGetPortfolioQuery({ page, limit });
   

  useEffect(() => {
    if (PortfolioData?.data) {
      setPortfolio((prev) => [...prev, ...PortfolioData.data]);
      setLoadingMore(false); // Reset loadingMore when data is fetched
    }
  }, [PortfolioData]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto flex items-center flex-col gap-5">
        <div className="flex items-center flex-col py-5 md:py-10 gap-2 md:gap-4">
          <p className="inline-flex  w-fit bg-[#D7D5DF] p-2 px-5 rounded-full text-sm font-semibold md:font-semibold md:text-[1rem] text-[#4A2848]">
            Recently Work
          </p>
          <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-center leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words">
            Our Latest Projects
          </span>
        </div>

        {/* Portfolio Section */}
        {isPortfolioLoading ? (
          <div className="py-10">
            <Loader />
          </div>
        ) : portfolio?.length > 0 ? (
          <div className="w-[100%] items-center gap-10 md:gap-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center">
            {portfolio?.map((_, index) => (
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
        ) : (
          <div className="py-10 text-center">
            <p className="text-lg font-semibold text-gray-600">
              Our servers are currently undergoing enhancements to serve you
              better. Stay tuned for updates!
            </p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      <div className="w-full flex items-center justify-center py-10">
        {isPortfolioLoading ?null:loadingMore ? (
            <div className="py-10">
              <Loader />
            </div>
          ) :PortfolioData?.next_page&& (
          <div className="inline-flex items-center ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
            >
              <Btn
                S_BtnText={"Load More"}
                onpress={handleLoadMore} // Use the handler to load more data
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioComp;
