import React, { useState } from "react";
import Btn from "./Btn";
import FaqCard from "./blog/FaqCard";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
let Faq = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a wide range of digital solutions, including custom web and mobile app development, e-commerce platforms, UI/UX design, automation scripts, and AI-powered applications. We also specialize in API integrations, database management, and cloud-based solutions. Whether you need a simple website or a complex enterprise solution, we have the expertise to bring your ideas to life.",
  },
  {
    question: "Can you build custom websites or mobile apps?",
    answer:
      "Yes! We develop fully customized web and mobile applications tailored to your needs. Our process involves understanding your goals, creating a user-friendly design, developing the functionality, and testing for performance. We ensure that your app or website is scalable, secure, and optimized for the best user experience.",
  },
];
function FaqComponent() {
  const [faq, setfaq] = useState(Faq);
  const [selected, setselected] = useState(0);
  return (
    <motion.div
    className="w-full bg-[#F5F5F5] md:py-10"
    initial="hidden"
    whileInView="visible"
    // viewport={{ once: true }}
    variants={fadeIn}
  >
    <div className="w-[95%] mx-auto text-center flex flex-col gap-10 md:gap-16 items-center">
      <motion.div className="flex flex-col items-center gap-2 md:gap-8" variants={fadeIn}>
        <h1 className="font-poppins font-semibold text-lg md:text-[3rem]">
          Frequently Asked Questions
        </h1>
        <p className="w-[90%] text-xs md:text-sm mx-auto text-center font-serif leading-[20px]">
          Find answers to common questions about our services, development process, pricing, and support.
        </p>
      </motion.div>
  
      <div className="w-full flex flex-col gap-4 md:gap-10">
        {faq.map((e, index) => (
          <motion.div key={index} initial="hidden" animate="visible" variants={fadeIn}>
            <FaqCard
              keyId={index}
              selected={selected}
              title={e.question}
              description={e.answer}
              onPress={() => setselected(index === selected ? -1 : index)}
            />
          </motion.div>
        ))}
      </div>
  
      <motion.div className="inline-flex items-center bg-[#F5F5F5]" variants={fadeIn}>
        <Btn
          S_BtnText={"Load More"}
          onpress={() =>
            setfaq((previos) => [
              ...previos,
              {
                question: "Do you work with Shopify, Next.js, or Flutter?",
                answer:
                  "Absolutely! We specialize in Shopify for e-commerce, Next.js for web apps, and Flutter for mobile apps.",
              },
            ])
          }
        />
      </motion.div>
    </div>
  </motion.div>
  );
}

export default FaqComponent;
