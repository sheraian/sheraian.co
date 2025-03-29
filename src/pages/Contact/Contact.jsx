import React from "react";
import { motion } from "framer-motion";
import FloatingLabelInput from "../../components/FloatingLabelInput";
import Btn from "../../components/Btn";
import HeroBlog from "../../components/blog/HeroBlog";

function Contact() {
  return (
    <div className="w-full">
      <HeroBlog
        P_BtnText={"Contact us"}
        H_Text={<>Ready to Get Started ?</>}
        M_Text={
          "We specialize in delivering custom IT projects that enhance efficiency, streamline operations, and drive business growth."
        }
        isSBtnShow={true}
        S_BtnText={"About US"}
        onpress={() => {
          window.location.href = "/about";
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full py-10  bg-gray-50 bg-opacity-50"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-[90%] md:w-[70%] xl:w-[60%] mx-auto bg-white rounded-[30px] shadow-lg p-5 md:p-10 flex flex-col gap-3 md:gap-10"
        >
          <div className="text-start">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-[2.5rem] lg:text-[3.0rem] font-bold leading-[0.4rem] md:leading-[3.5rem] lg:leading-[4rem] capitalize"
            >
              Contact Us
            </motion.span>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[8px] md:text-[1rem] text-gray-600"
            >
              Fill out this form, and we will answer you as soon as possible!
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:border md:border-gray-200 md:px-5 md:py-5 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 rounded-lg"
          >
            <FloatingLabelInput id="firstName" label="First Name" />
            <FloatingLabelInput id="lastName" label="Last Name" />
            <FloatingLabelInput id="email" label="Email" type="email" />
            <FloatingLabelInput id="phone" label="Phone" type="tel" />

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
              <Btn S_BtnText={"Submit"} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
