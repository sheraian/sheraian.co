import { useState } from "react";
import BlogCard from "./components/blog/BlogCard";
import BlogCat from "./components/blog/BlogCat";
import HeroBlog from "./components/blog/HeroBlog";
import { motion } from "framer-motion";
import Home from "./pages/Home/Home";
import Btn from "./components/Btn";
import FaqCard from "./components/blog/FaqCard";
function App() {
  const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let Faq=[
    {
      "question": "What services do you offer?",
      "answer": "We provide a wide range of digital solutions, including custom web and mobile app development, e-commerce platforms, UI/UX design, automation scripts, and AI-powered applications. We also specialize in API integrations, database management, and cloud-based solutions. Whether you need a simple website or a complex enterprise solution, we have the expertise to bring your ideas to life."
    },
    {
      "question": "Can you build custom websites or mobile apps?",
      "answer": "Yes! We develop fully customized web and mobile applications tailored to your needs. Our process involves understanding your goals, creating a user-friendly design, developing the functionality, and testing for performance. We ensure that your app or website is scalable, secure, and optimized for the best user experience."
    },
    {
      "question": "Do you work with Shopify, Next.js, or Flutter?",
      "answer": "Absolutely! We have extensive experience in Shopify for e-commerce solutions, Next.js for high-performance web applications, and Flutter for cross-platform mobile apps. Our expertise ensures that your project is built using the latest technologies and best practices."
    }
  ]
  return (
    <div className="flex flex-col gap-10">
      <HeroBlog />
      <div className="w-[95%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-5">
        {data.map((e, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
          >
            <BlogCard />
          </motion.div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center ">
        <div className="inline-flex items-center bg-[#F5F5F5]">
          <Btn
            S_BtnText={"Load More"}
            onpress={() => setdata((previos) => [...previos, 1, 3, 4])}
          />
        </div>
      </div>
      <div className="w-full bg-[#F5F5F5] ">
        <div className="w-[95%] mx-auto text-center flex flex-col items-center  ">
          <div className="flex flex-col items-center md:py-28 gap-2 md:gap-8">
            <h1 className="font-poppins font-semibold text-lg md:text-[3rem]">
              Frequently Asked Question
            </h1>
            <p className="w-[90%] text-xs md:text-sm mx-auto text-center font-serif leading-[20px]">
              Find answers to common questions about our services, development
              process, pricing, and support. If you need more details, feel free
              to reach out!
            </p>
          </div>
          <div class="w-full flex flex-col gap-10">
            {Faq.map((e,index)=>(
              <FaqCard keyId={index+1} title={e.question} description={e.answer} />
            ))}
            </div>
        </div>
      </div>
      <div style={{ height: 110 }} />
    </div>
  );
}

export default App;
