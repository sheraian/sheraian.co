import React, { useEffect, useState } from "react";
import Btn from "./Btn";
import FaqCard from "./blog/FaqCard";
import { motion } from "framer-motion";
import { useGetFaqsQuery } from "../apiSlice";
import Loader from "./Loader";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function FaqComponent() {
  const [faq, setfaq] = useState([]);
  const [selected, setselected] = useState(0);
    const [page, setPage] = useState(1);
    const limit = 3;
  const { data: FaqData, isLoading, isError, error } = useGetFaqsQuery({page,limit});
  useEffect(() => {
    if (FaqData?.data) {
      setfaq((prev) => [...prev, ...FaqData.data]);
    }
  }, [FaqData]);
  return (
    <motion.div
      className="w-full bg-[#F5F5F5] md:py-10"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="w-[100%] mx-auto text-center flex flex-col gap-10 md:gap-16 items-center">
        <motion.div
          className="flex flex-col items-center gap-2 md:gap-8"
          variants={fadeIn}
        >
          <h1 className="font-poppins font-semibold text-lg md:text-[3rem]">
            Frequently Asked Questions
          </h1>
          <p className="w-[90%] text-xs md:text-sm mx-auto text-center font-serif leading-[20px]">
            Find answers to common questions about our services, development
            process, pricing, and support.
          </p>
        </motion.div>
        {isLoading ? (
          <div className="p-10">
            <Loader />
          </div>
        ) : faq.length > 0 ? (
          faq.map((e, index) => (
            <motion.div
              key={ index} 
              className="w-full"
              // Prefer `e.id` over `index`
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // Animates once per page load
            >
              <FaqCard
                keyId={index} // Ensure a unique key
                selected={selected}
                title={e.question}
                description={e.answer}
                onPress={() => setselected(index === selected ? -1 : index)}
              />
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500">No FAQs found</p>
        )}

        

       {FaqData?.next_page&&(
         <motion.div
         className="inline-flex items-center bg-[#F5F5F5]"
         variants={fadeIn}
       >
         <Btn
           S_BtnText={"Load More"}
           onpress={() =>setPage(page+1)}
         />
       </motion.div>
       )}
      </div>
    </motion.div>
  );
}

export default FaqComponent;
