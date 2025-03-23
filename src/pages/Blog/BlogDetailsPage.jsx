import React, { useState } from "react";
import HeroBlog from "../../components/blog/HeroBlog";
import { useParams } from "react-router-dom";
import FaqComponent from "../../components/FaqComponent";
import DOMPurify from "dompurify";
import { content } from "../../../data";
import ReactQuill from "react-quill-new";
import "react-quill/dist/quill.snow.css";
import BlogCard from "../../components/blog/BlogCard";
import BlogCardSub from "../../components/blogCardSub";
import CommentCard from "../../components/CommentCard";
import Contact from "../Contact/Contact";
import FloatingLabelInput from "../../components/FloatingLabelInput";
import { motion } from "framer-motion";
import Btn from "../../components/Btn";

function BlogDetailsPage() {
  const { slug, id } = useParams();
  return (
    <div className=" flex flex-col items-center gap-16 bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"Blogs"}
        H_Text={<>{slug}</>}
        M_Text={
          "our company blogs cover a wide range of topics, including new technologies, consumer gadgets, and industry trends"
        }
        isSBtnShow={false}
        S_BtnText={"Explore More"}
      />
      <div className="w-[90%] mx-auto flex flex-col  lg:flex-row justify-between gap-10">
        <div className="w-[100%]  lg:w-auto  flex flex-col items-start justify-center text-start gap-10">
          <img
            src="/frontend.png"
            alt="Blog Image"
            className="w-full h-auto max-h-[500px] object-cover rounded-xl"
          />
          <span
            className="w-full text-[1.5rem] sm:text-[2.0rem] md:text-[2.5rem] lg:text-[3.0rem] text-start font-semibold 
  leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words capitalize"
          >
            {slug}
          </span>
          <div
            className="ql-editor w-full v text-base md:text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          />
          <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[1.2rem] font-bold">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {Array(5)
                  .fill()
                  .map((e) => (
                    <div className="p-2 bg-white border rounded border-gray-300">
                      <span>Newss</span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[1.2rem] font-bold">Share:</span>
              <div className="flex flex-wrap gap-2">
                {Array(5)
                  .fill()
                  .map((e) => (
                    <div className="p-2 bg-transparent border rounded border-[#340831]">
                      <i className="fab fa-facebook text-[24px]"></i>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full">
            <span className="text-[1rem] lg:text-[2rem] font-poppins font-semibold flex pb-10">
              02 Comments
            </span>
            <div className="flex flex-col gap-5 pb-10">
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
            <span className="text-[1rem] lg:text-[2rem] font-poppins font-semibold flex pb-10">
            Leave a Comments
            </span>
            <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-[100%]  mx-auto bg-white rounded-[30px] shadow-lg  flex flex-col gap-3 md:gap-10 px-5 py-5 mb-10"
      >
    
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full  md:px-5 md:py-5 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 rounded-lg"
        >
          <FloatingLabelInput id="firstName" label="First Name" />
          <FloatingLabelInput id="email" label="Email" type="email" />

          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-2">
            <label
              htmlFor="writeMessage"
              className="block text-sm font-medium text-gray-700 ml-1"
            >
              Write a Message
            </label>
            <textarea
              id="writeMessage"
              className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:border-none"
              rows="4"
              placeholder="Type your message here..."
            />
          </div>
          <div className="inline-flex">
            <Btn S_BtnText={"Post A Comment"} />
          </div>
        </motion.div>
      </motion.div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-5">
          <div className="w-[100%]  lg:w-[300px] flex flex-col  bg-white px-5 py-4 rounded-lg items-start justify-center gap-4">
            <span className="text-[#17012C] text-[1.2rem] underline underline-offset-8">
              Search
            </span>
            <div className=" border border-[#4A2848] flex items-center rounded-lg w-full ">
              <input
                className="bg-transparent flex-1 px-0.5  outline-none text-gray-700"
                placeholder="Search here..."
                type="text"
              />

              <button className="w-[35px] h-[35px] bg-[#4A2848] flex items-center justify-center text-white rounded-r-md">
                <i className="fas fa-search text-[16px]"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[300px] flex flex-col  bg-white px-5 py-4 rounded-lg items-start justify-center gap-4">
            <span className="text-[#17012C] text-[1.2rem] flex items-start justify-center gap-1">
              <span className="text-[#17012C] text-[1.2rem] underline underline-offset-8">
                Recent
              </span>
              Post
            </span>
            <BlogCardSub />
            <BlogCardSub />
            <BlogCardSub />
            <BlogCardSub />
          </div>
          <div className="w-full lg:w-[300px] flex flex-col  bg-white px-5 py-4 rounded-lg items-start justify-center gap-4">
            <span className="text-[#17012C] text-[1.2rem] underline underline-offset-8">
              Tags
            </span>

            <div className="flex flex-wrap gap-2">
              {Array(5)
                .fill()
                .map((e) => (
                  <div className="bg-[#D7D5DF] py-2 px-3 text-[#17012C] rounded-lg">
                    <span className="text-sm font-poppins font-normal">
                      Security
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default BlogDetailsPage;
