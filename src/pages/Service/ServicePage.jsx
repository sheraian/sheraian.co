import React from 'react'
import HeroBlog from '../../components/blog/HeroBlog'
import Btn from '../../components/Btn'
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from '../../components/ServiceCard';
import FaqComponent from '../../components/FaqComponent';

function ServicePage() {
  return (
    <div className=" flex flex-col items-center gap-16 bg-[#F5F5F5]">
    <HeroBlog
      P_BtnText={"Services"}
      H_Text={<>Services & Solutions</>}
      M_Text={
        "Take your company to new heights by investing in our reliable and efficient technology solutions."
      }
      isSBtnShow={false}
      S_BtnText={"Explore More"}
    />
        <div class=" flex flex-col items-center py-5  gap-10 w-[90%] mx-auto  ">
        <div className="w-full flex flex-col justify-center items-center gap-[30px]">
          <div className="text-[#4A2848] flex justify-center items-center font-inter font-medium text-[16px] leading-[26px] tracking-[0px] py-[12px] px-[24px] bg-[#DEDAE5] rounded-[50px]">
            Our Featured Services
          </div>
          <span className="md:w-[70%] mx-auto text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-center leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words capitalize">
            We Provide Exclusive Service For Your Business
          </span>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2   xl:grid-cols-3 gap-y-5 gap-x-4">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
                <a href="/service/Software Service/1">
              <ServiceCard />

                </a>
            </motion.div>
          ))}
        </div>
        <div className="">
          <Btn S_BtnText={"Load More"} 
          
        // onpress={()=>navigate('/service')}
          />
        </div>

      </div>
      <FaqComponent />
    </div>
  )
}

export default ServicePage