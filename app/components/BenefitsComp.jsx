import React, { useEffect, useState } from "react";
import BenefitsCard from "./BenefitsCard";
import Btn from "./Btn";
import { motion } from "framer-motion";
import { useGetBenefitsQuery } from "../redux/apiSlice";
import Loader from "./Loader";

function BenefitsComp({ serviceId }) {
  const [page, setPage] = useState(1);
  const limit = 5;
  const [services, setServices] = useState([]);
  const [loadmore,setloadmore]=useState(false)

  const {
    data: ServiceData,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetBenefitsQuery({ id: serviceId, page, limit });

  useEffect(() => {
    if (ServiceData?.data) {
      setServices((prev) => [...prev, ...ServiceData.data]);
    }
    setloadmore(false)
  }, [ServiceData]);
  return isLoading ? (
    <div className="w-full flex items-center justify-center">
      <Loader />
    </div>
  ) : isError ? null : (
    <>
      <div className="mx-auto flex flex-col items-center gap-5 pb-5">
        <div className="w-fit py-2.5 px-8 bg-[#D7D5DF] rounded-full shadow-md hover:bg-[#C5C3CF] transition duration-300 cursor-pointer">
          <h1 className=" text-[#4A2848] font-bold text-lg text-center capitalize">
            Services Benefits
          </h1>
        </div>

        <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-center leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words capitalize">
          Benefits With Our Service
        </span>
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-10  lg:gap-14 ">
        {services?.map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {/* flag={index % 2 == 0 ? false : true} */}
            <BenefitsCard item={_} flag={index % 2 == 0 ? false : true}  />
          </motion.div>
        ))}
      </div>
    {loadmore?(  <div className="w-full flex items-center justify-center">
        <Loader />
      </div>):

   ServiceData?.next_page && (
        <div className=" w-full flex items-center justify-center ">
          <div className="inline-flex items-center ">
            <Btn S_BtnText={"Load More"} onpress={() => {
                setloadmore(true)
                setPage(page+1)
            }} />
          </div>
        </div>
      )}
    </>
  );
}

export default BenefitsComp;
