
import { useState } from "react";
import HeroBlog from "../../components/blog/HeroBlog";
import Btn from "../../components/Btn";
import { motion, AnimatePresence } from "framer-motion";
import BlogBottomSection from "../Blog/BlogBottomSection";
import PortfolioWidget from "../../components/PortfolioWidget";
import PriceWidget from "../../components/PriceWidget";
import ServiceCard from "../../components/ServiceCard";
import {
  useGetBlogsQuery,
  useGetReviewsQuery,
  useGetServicesQuery,
} from "../../apiSlice";
import Loader from "../../components/Loader";
import FaqComponent from "../../components/FaqComponent";
import { cardData, testimonials } from "../../../data";

const Card = ({ img, H_main, B_Text }) => {
  return (
    <div className="w-[100%] lg:w-[326px] rounded-[15px] bg-white">
      <div className="flex flex-col justify-center items-start gap-6 md:gap- px-4 md:px-[30px] py-5">
        <div className="bg-[#4A2848] rounded-[15px] w-[52px] h-[52px] md:w-[62px] md:h-[62px] flex justify-center items-center">
          <img src={img} className="w-3/4 h-3/4 inherit" alt="" />
        </div>
        <div>
          <p className="font-inter font-semibold text-[25px] leading-[35px] tracking-[-1px]">
            {H_main}
          </p>
          <p className="font-inter font-normal text-[16px] leading-[26px] tracking-[0px] text-[#7A7A7A]">
            {B_Text}
          </p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const {
    data: ServiceData,
    isLoading,
    isError,
    error,
  } = useGetServicesQuery();
  const {
    data: BlogData,
    isLoading: isBlogsLoading,
    isError: isBlogsError,
    error: blogsError,
  } = useGetBlogsQuery();
  const {
    data: ReviewsData,
    isLoading: rw_loader,
    isError: is_reError,
    error: rw_error,
  } = useGetReviewsQuery();
  const handleNext = () => {
    alert(ReviewsData?.data?.length);
    if (currentIndex < ReviewsData?.data?.length - 1) {
      setDirection(1); // Moving Right
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1); // Moving Left
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="w-full bg-[#F5F5F5] ">
      {/* Hero Section */}
      <HeroBlog
        P_BtnText={"Best IT Solution Provder"}
        H_Text={
          <>
            IT Consulting Services <br /> For Your Business
          </>
        }
        M_Text={
          "Professionally optimize interdependent intellectual introperable connect best practice. Progressivley fabricate done"
        }
        isSBtnShow={true}
        S_BtnText={"Explore More"}
      />
      {/* Second Section */}
      <div className="w-full flex justify-center items-center pt-[100px] lg:pt-[105px] pb-[100px] lg:pb-[105px]">
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16">
          <img src="/assets/Home/SecondSec_Image.svg" alt="Section Image" />
          <div className="flex flex-col justify-center items-start gap-4 md:gap-7">
            <div className="flex justify-center items-center px-[22px] py-[5px] bg-[#DEDAE5] rounded-[50px]">
              <p className="text-[#4A2848]">Who We Are</p>
            </div>

            <p className="font-inter font-semibold text-[1.5rem] md:text-[56px] md:leading-[60px] tracking-[0%] align-centre">
              We Are Increasing Business Success With Technology
            </p>
            <p className="font-inter font-normal text-sm md:text-[18px] md:leading-[28px] tracking-[0%] align-center">
              It is a long established fact that a reader will be distracted the
              readable content of a page when looking at layout the point.
            </p>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-[50px]">
              <div className="flex flex-col gap-[15px] font-inter font-medium text-[20px] leading-[28px] tracking-[0%] ">
                <div className="flex justify-start items-center gap-[10px]">
                  <img src="/assets/Home/TickIcone.svg" alt="tick" /> Problem
                  Solving
                </div>
                <div className="flex justify-start items-center gap-[10px]">
                  <img src="/assets/Home/TickIcone.svg" alt="tick" /> Mission &
                  Vision
                </div>
              </div>
              <div className="w-full  ml-auto lg:w-auto flex items-center  gap-[10px]">
                <img src="/assets/Home/Founder.svg" alt="tick" />
                <div>
                  <p className="font-inter font-semibold text-[20px]  tracking-[0%] leading-none">
                    M Sheraz
                  </p>
                  <p className="font-[Plus Jakarta Sans] font-normal text-sm leading-[26px] tracking-[0%] text-[#726B7D]">
                    Founder
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <Btn S_BtnText={"Explore More"} />
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className="w-full flex justify-center items-center bg-[#340831] relative overflow-hidden py-[40px]">
        <img
          src="/assets/Home/SecondSection/CurlyLines.svg"
          className=" absolute left-2"
          alt="curlies"
        />
        <img
          src="/assets/Home/SecondSection/DotsShapes.svg"
          className=" absolute right-0 bottom-0"
          alt="dotes"
        />
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[75px]">
          <div className="flex flex-col justify-center items-start gap-[24px]">
            <div className="flex justify-center items-center px-[22px] py-[5px] bg-[#DEDAE5] rounded-[50px] text-[#4A2848]">
              <p>Work Process</p>
            </div>
            <p className="font-inter font-semibold text-[1.9rem] md:text-[3rem] lg:text-[4rem] lg:leading-[60px] tracking-[0%] align-centre text-white">
              Our software development process
            </p>
            <p className="font-inter font-normal text-[18px] leading-[28px] tracking-[0%] align-center text-white">
              It is a long established fact that a reader will be distracted the
              readable content of a page when looking at layout the point.
            </p>
            <div className="hidden md:flex justify-center items-center gap-[11px] pl-[23px] py-[1px] pr-[1px] bg-[white] rounded-[35px] cursor-pointer hover:scale-105 group">
              <p className="font-inter font-semibold text-[18px] leading-[18px] tracking-[0%] align-middle text-[#4A2848]">
                Explore More
              </p>
              <img
                className="rotate-[225deg] transition-transform duration-300 ease-in-out group-hover:rotate-0"
                src="/assets/Home/SecondSection/Purple_Icone.svg"
                alt="Explore More"
              />
            </div>
          </div>
          {/* Card Section */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[2rem] z-[1]">
            {/* first */}
            <div className="w-full flex flex-col justify-center items-center gap-[2rem]">
              {cardData.slice(0, 2).map((c, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Card
                      key={index}
                      img={c.Icone}
                      H_main={c.H_main}
                      B_Text={c.B_Text}
                    />
                  </motion.div>
                );
              })}
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-[2rem] md:pt-[80px]">
              {cardData.slice(-2).map((c, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Card
                      key={index}
                      img={c.Icone}
                      H_main={c.H_main}
                      B_Text={c.B_Text}
                    />
                  </motion.div>
                );
              })}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class=" flex flex-col items-center  py-10 gap-10 w-[90%] mx-auto ">
        <div className="w-full flex flex-col justify-center items-center gap-[30px]">
          <div className="text-[#4A2848] flex justify-center items-center font-inter font-medium text-[16px] leading-[26px] tracking-[0px] py-[12px] px-[24px] bg-[#DEDAE5] rounded-[50px]">
            Our Featured Services
          </div>
          <span className="w-[90%] text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-center leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words capitalize">
            We Provide Exclusive Service For Your Business
          </span>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-4">
          {isLoading ? (
            <Loader />
          ) : ServiceData?.data.length > 0 ? (
            ServiceData?.data.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ServiceCard key={index.toString()} item={_} />
              </motion.div>
            ))
          ) : (
            <p className="text-black">No data available</p>
          )}
        </div>

        <div className="py-10">
          <Btn
            S_BtnText={"Load More"}
            onpress={() => (window.location.href = "/service")}
          />
        </div>
      </div>
      {/* fourth Section */}
      <div className="w-full flex justify-center items-center py-10 md:py-10 ">
        <div className="w-[90%] flex flex-col justify-center items-center gap-[40px]">
          <div className="w-full flex flex-col justify-center items-center gap-[30px]">
            <div className="text-[#4A2848] flex justify-center items-center font-inter font-medium text-[16px] leading-[26px] tracking-[0px] py-[12px] px-[24px] bg-[#DEDAE5] rounded-[50px]">
              Testimonials
            </div>
            <p className="font-inter font-semibold text-[40px] md:text-[56px] leading-[45px] md:leading-[65px] tracking-[0px] text-center">
              What Happy Clients <br /> Say About Us?
            </p>
          </div>

          {/* Slider */}
          {rw_loader ? (
            <div className="h-[400px] flex items-center justify-center">
              <Loader />
            </div>
          ) : is_reError ? (
            <p className="text-red-500 text-lg font-semibold text-center py-5">
              {rw_error?.error || "Something went wrong. Please try again."}
            </p>
          ) : ReviewsData.data.length >= 0 ? (
            <>
              <div className="w-full h-[700px] md:h-[500px] lg:h-[400px] flex flex-col md:flex-row justify-center items-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: direction * 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -50 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full flex flex-col md:flex-row justify-center items-center"
                  >
                    <img
                      src={testimonials[currentIndex].image}
                      className="md:mr-[-40px] mb-[-40px] md:mb-0 z-[1] w-[200px] h-[200px] md:w-[332px] md:h-[332px]"
                      alt="User"
                    />
                    <div className="w-full md:w-[971px] py-[45px] pl-[20px] sm:pl-[110px] pr-[20px] sm:pr-[62px] bg-white rounded-tl-[50px] rounded-br-[50px] flex flex-col justify-center items-start gap-5">
                      <div className="w-full flex justify-between items-center">
                        <div className="flex justify-center items-center gap-[5px]">
                          {Array(5)
                            .fill(3)
                            .map((_, index) => (
                              <img
                                key={index}
                                src="/assets/Home/Testimonials/star.svg"
                                alt="Star"
                              />
                            ))}
                        </div>
                        <div className="w-[65px] h-[65px] rounded-full bg-[#4A2848] flex justify-center items-center">
                          <img
                            src="/assets/Home/Testimonials/Quotations.svg"
                            alt="Quotation"
                          />
                        </div>
                      </div>
                      <p className="font-inter font-medium text-[18px] leading-[27px] tracking-[0%] customScreen:text-[24px] customScreen:leading-[34px]">
                        {ReviewsData.data[currentIndex].text}
                      </p>
                      <div className="flex justify-start items-center gap-[26px]">
                        <img
                          src={testimonials[currentIndex].image}
                          alt="User"
                          className="w-[68px] h-[68px]"
                        />
                        <div>
                          <p className="font-inter font-semibold text-[20px] leading-[20px] tracking-[0%]">
                            {testimonials[currentIndex].name}
                          </p>
                          <p className="font-[Plus Jakarta Sans] font-normal text-[16px] leading-[26px] tracking-[0%] text-[#726B7D]">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="w-full flex justify-end items-center gap-[20px] mt-[-30px] 2xl:mr-[100px]">
                <div
                  onClick={handlePrev}
                  className={`rounded-full w-[54px] h-[54px] border ${currentIndex > 0 ? "bg-[#4A2848]" : "bg-transparent"} flex justify-center items-center cursor-pointer`}
                >
                  <img
                    src={
                      currentIndex > 0
                        ? "/assets/Home/Testimonials/leftWhiteArrow.svg"
                        : "/assets/Home/Testimonials/leftArrow.svg"
                    }
                    alt="LeftArrow"
                  />
                </div>
                <div
                  onClick={handleNext}
                  className={`rounded-full w-[54px] h-[54px] border border-black flex justify-center items-center ${currentIndex < ReviewsData?.data.length - 1 ? "bg-[#4A2848]" : "bg-transparent"} cursor-pointer`}
                >
                  <img
                    src={
                      currentIndex < ReviewsData?.data.length - 1
                        ? "/assets/Home/Testimonials/rightWhiteArrow.svg"
                        : "/assets/Home/Testimonials/rightBlackArrow.svg"
                    }
                    alt="RightArrow"
                  />
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-lg font-semibold text-center py-5">
              No Data Available
            </p>
          )}

          {/* Navigation Buttons */}
        </div>
      </div>
      <div className="overflow-hidden lg:overflow-visible">
        <PortfolioWidget />
      </div>
      <div className="w-full flex justify-center items-center pt-[70px] md:pt-[100px] ">
        <PriceWidget />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[90%] flex flex-col justify-center items-center gap-[40px] pt-[70px]">
          <div className="w-full flex flex-col justify-center items-center gap-[30px]">
            <div className="text-[#4A2848] flex justify-center items-center font-inter font-medium text-[16px] leading-[26px] tracking-[0px] py-[12px] px-[24px] bg-[#DEDAE5] rounded-[50px]">
              News & Article
            </div>
            <p className="font-inter font-semibold text-[40px] md:text-[56px] leading-[45px] md:leading-[65px] tracking-[0px] text-center">
              Read our latest insights
            </p>
          </div>
          {isBlogsLoading?(
  <div className="p-10">
    <Loader />
  </div>
):BlogData?.data?.length>0?(
  <BlogBottomSection data={BlogData?.data} />

):(
  <p className="text-gray-500 text-lg font-semibold text-center py-5">
  No Data Available
</p>
)

}


          <div className=" w-full flex items-center justify-center ">
        <div className="inline-flex items-center bg-[#F5F5F5]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
          >
            <Btn
              S_BtnText={"Load More"}
              // onpress={() =>
            onpress={() => (window.location.href = "/blogs")}

         
            />
          </motion.div>
        </div>
      </div>
      <FaqComponent />
        </div>
      </div>
      {/* footer Section */}
      <div className="p-5" />
    </div>
  );
};

export default Home;
