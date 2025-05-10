import { useState } from "react";
import HeroBlog from "../components/blog/HeroBlog";
import Btn from "../components/Btn";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TeamSection from "../components/TeamSection";
import FaqComponent from "../components/FaqComponent";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

let services = [
  {
    name: "Website",
    icon: "fas fa-globe",
  },
  {
    name: "Android",
    icon: "fab fa-android",
  },
  {
    name: "iOS",
    icon: "fab fa-apple",
  },
  {
    name: "Watch",
    icon: "fas fa-clock",
  },
  {
    name: "TV",
    icon: "fas fa-tv",
  },
  {
    name: "IOT",
    icon: "fas fa-microchip",
  },
];
export const meta = () => {
  return [
    { title: "About | Sheraian" },
    {
      name: "description",
      content:
        "We deliver innovative tech solutions to help businesses grow and succeed. Learn more about our mission, values, and expert team.",
    },
  ];
};
export const links = () => {
  return [
    {
      rel: "canonical",
      href: "https://sheraian.co.uk/about",
    },
  ];
};

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  return (
    <div className="w-full bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"About Company"}
        H_Text={
          <>
            Dedicated to <br /> delivering excellence
          </>
        }
        M_Text={
          "A memorable motto or phrase that's designed to serve as a permanent expression of company's greater purpose and mission."
        }
        isSBtnShow={false}
        S_BtnText={"Explore More"}
      />

      <motion.div
        className="w-full flex justify-center items-center pt-[100px] lg:pt-[105px] pb-[50px] lg:pb-[105px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16">
          <motion.img
            src="/assets/Home/SecondSec_Image.svg"
            alt="Section Image"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          />

          <motion.div
            className="flex flex-col justify-center items-start gap-4 md:gap-7"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <motion.div
              className="flex justify-center items-center px-[22px] py-[5px] bg-[#DEDAE5] rounded-[50px]"
              variants={fadeIn}
            >
              <p className="text-[#4A2848]">Who We Are</p>
            </motion.div>

            <motion.p
              className="font-inter font-semibold text-[1.5rem] md:text-[56px] md:leading-[60px] tracking-[0%] align-centre"
              variants={fadeIn}
            >
              We Are Increasing Business Success With Technology
            </motion.p>

            <motion.p
              className="font-inter font-normal text-sm md:text-[18px] md:leading-[28px] tracking-[0%] align-center"
              variants={fadeIn}
            >
              It is a long established fact that a reader will be distracted the
              readable content of a page when looking at layout the point.
            </motion.p>

            <motion.div
              className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-[50px]"
              variants={fadeIn}
            >
              <div className="flex flex-col gap-[15px] font-inter font-medium text-[20px] leading-[28px] tracking-[0%]">
                <div className="flex justify-start items-center gap-[10px]">
                  <img src="/assets/Home/TickIcone.svg" alt="tick" /> Problem
                  Solving
                </div>
                <div className="flex justify-start items-center gap-[10px]">
                  <img src="/assets/Home/TickIcone.svg" alt="tick" /> Mission &
                  Vision
                </div>
              </div>

              <motion.div
                className="w-full ml-auto lg:w-auto flex items-center gap-[10px]"
                variants={fadeIn}
              >
                <img src="/assets/Home/Founder.svg" alt="Founder" />
                <div>
                  <p className="font-inter font-semibold text-[20px] tracking-[0%] leading-none">
                    M Sheraz
                  </p>
                  <p className="font-[Plus Jakarta Sans] font-normal text-sm leading-[26px] tracking-[0%] text-[#726B7D]">
                    Founder
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Btn
                S_BtnText={"Get In Touch"}
                onpress={() => (window.location.href = "/contact-us")}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="w-full flex justify-center items-center  pt-[20px] lg:pt-[20px] pb-[50px] lg:pb-[105px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-10">
          <motion.div
            className="flex flex-col justify-center items-start gap-4 md:gap-7"
            variants={fadeIn}
          >
            <div className="flex justify-center items-center px-[22px] py-[5px] bg-[#DEDAE5] rounded-[50px]">
              <p className="text-[#4A2848]">Mission & Values</p>
            </div>
            <p className="font-inter font-semibold text-[1.5rem] md:text-[56px] md:leading-[60px] tracking-[0%]">
              Mission And Vision
            </p>
            <p className="font-inter font-normal text-sm md:text-[18px] md:leading-[28px] tracking-[0%]">
              Our mission is typically to provide innovative and reliable
              technology solutions to clients, enabling them to achieve their
              business goals through efficient and effective IT systems, while
              its vision is to be a leading provider of cutting-edge technology
              solutions, shaping the future of the industry and empowering
              clients to reach their full potential through digital
              transformation
            </p>
            <motion.div
              className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-[50px]"
              variants={fadeIn}
            >
              <div className="flex flex-col gap-[15px] font-inter font-medium text-[20px] leading-[28px] tracking-[0%]">
                <div className="flex justify-start items-center gap-[10px]">
                  <img src="/assets/Home/TickIcone.svg" alt="tick" /> Focus on
                  customer value
                </div>
                <div className="flex justify-start items-center gap-[10px]">
                  <img src="/assets/Home/TickIcone.svg" alt="tick" /> Innovation
                  and adaptation
                </div>
                <div className="flex justify-start items-center gap-[10px]">
                  <img src="/assets/Home/TickIcone.svg" alt="tick" /> Quality
                  and reliability
                </div>
              </div>
            </motion.div>
            <Btn
              S_BtnText={"Get In Touch"}
              onpress={() => (window.location.href = "/contact-us")}
            />
          </motion.div>
          <motion.img
            src="/assets/Home/SecondSec_Image.svg"
            alt="Section Image"
            variants={fadeIn}
          />
        </div>
      </motion.div>
      <div className="w-full flex justify-center items-center bg-[#340831] relative overflow-hidden py-[40px]">
        <img
          src="/assets/Home/SecondSection/CurlyLines.svg"
          className="absolute left-2"
          alt="curlies"
        />
        <img
          src="/assets/Home/SecondSection/DotsShapes.svg"
          className="absolute right-0 bottom-0"
          alt="dotes"
        />
        <div className="w-[90%] mx-auto flex flex-col lg:flex-col justify-center items-center gap-10">
          <motion.div
            className="py-2.5 px-8 bg-[#D7D5DF] rounded-full shadow-md hover:bg-[#C5C3CF] transition duration-300 cursor-pointer"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h1 className="text-[#4A2848] font-bold text-lg text-center capitalize">
              Our Offers
            </h1>
          </motion.div>

          <div className="w-full flex flex-col justify-center items-center gap-14">
            <motion.p
              className="w-[100%] lg:w-[60%] mx-auto font-inter font-semibold text-[1.5rem] md:text-[3rem] lg:text-[4rem] lg:leading-[60px] tracking-[0%] text-white text-center break-words whitespace-normal"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              Enhance and Pioneer Using Technology Trends
            </motion.p>

            <div className="w-full flex items-center justify-center gap-10 flex-wrap">
              {services.map((e, index) => (
                <motion.div
                  key={index}
                  className="relative text-white p-5 rounded-lg shadow-lg w-[100%] sm:w-[40%] md:w-36 text-center border-2 border-white"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white text-purple-900 rounded-full flex items-center justify-center">
                    <i className={`${e.icon} text-2xl`}></i>
                  </div>
                  <p className="text-lg font-semibold mt-3">{e.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex flex-col items-center justify-center py-10 gap-10">
        <div className="flex flex-col items-center gap-3">
          <div className="w-fit py-2.5 px-8 bg-[#D7D5DF] rounded-full shadow-md hover:bg-[#C5C3CF] transition duration-300 cursor-pointer">
            <h1 className="text-[#4A2848] font-bold text-lg text-center capitalize">
              Our Team
            </h1>
          </div>
          <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-center leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words capitalize">
            Our Expert Team
          </span>
        </div>
        <TeamSection />
      </div>
      <FaqComponent />
    </div>
  );
};

export default About;
