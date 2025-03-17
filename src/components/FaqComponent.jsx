import React, { useState } from 'react'
import Btn from './Btn';
import FaqCard from './blog/FaqCard';

let Faq=[
  {
    "question": "What services do you offer?",
    "answer": "We provide a wide range of digital solutions, including custom web and mobile app development, e-commerce platforms, UI/UX design, automation scripts, and AI-powered applications. We also specialize in API integrations, database management, and cloud-based solutions. Whether you need a simple website or a complex enterprise solution, we have the expertise to bring your ideas to life."
  },
  {
    "question": "Can you build custom websites or mobile apps?",
    "answer": "Yes! We develop fully customized web and mobile applications tailored to your needs. Our process involves understanding your goals, creating a user-friendly design, developing the functionality, and testing for performance. We ensure that your app or website is scalable, secure, and optimized for the best user experience."
  },

]
function FaqComponent() {
    const [faq,setfaq]=useState(Faq)
    const [selected,setselected]=useState(0)
  return (
    <div className="w-full bg-[#F5F5F5] ">
    <div className="w-[95%] mx-auto text-center flex flex-col items-center  ">
      <div className="flex flex-col items-center py-16 md:py-28 gap-2 md:gap-8">
        <h1 className="font-poppins font-semibold text-lg md:text-[3rem]">
          Frequently Asked Question
        </h1>
        <p className="w-[90%] text-xs md:text-sm mx-auto text-center font-serif leading-[20px]">
          Find answers to common questions about our services, development
          process, pricing, and support. If you need more details, feel free
          to reach out!
        </p>
      </div>
      <div class="w-full flex flex-col gap-4 md:gap-10">
        {faq.map((e,index)=>(
          <div
          key={index}
          className="opacity-0 translate-y-5 animate-fadeIn"
        >
          <FaqCard keyId={index} selected={selected} title={e.question} description={e.answer} 
          onPress={()=>{
            if(index==selected){
              setselected(-1)
              return;
            }
            setselected(index)
          }}
          />
        </div>
        ))}
        </div>
        <div className="inline-flex items-center bg-[#F5F5F5] py-16">
      <Btn
        S_BtnText={"Load More"}
        onpress={() => setfaq((previos) => [...previos,   {
          "question": "Do you work with Shopify, Next.js, or Flutter?",
          "answer": "Absolutely! We have extensive experience in Shopify for e-commerce solutions, Next.js for high-performance web applications, and Flutter for cross-platform mobile apps. Our expertise ensures that your project is built using the latest technologies and best practices."
        }])}
      />
    </div>
    </div>
  </div>
  )
}

export default FaqComponent