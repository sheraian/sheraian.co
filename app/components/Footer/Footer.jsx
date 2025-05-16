import React, { useState } from "react";
import { usePostNewLettersMutation } from "../../redux/apiSlice";
import Loader from "../Loader";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [postNewLetters, { isLoadingg, isSuccess, error }] =
    usePostNewLettersMutation();
  const [loader, setloader] = useState(false);
  let isLoading=false

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postNewLetters({ email }).unwrap();
      alert("Subscribed successfully!");
      setEmail("");

    } catch (err) {
      alert("This email already exists or something went wrong.");

    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[url('/assets/Footer/bgImage.svg')] bg-no-repeat bg-cover">
      <div className="w-full flex flex-col justify-between items-center gap-y-[2.5rem]">
        {/* Email */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[1.5rem] bg-white/5 md:rounded-b-[3rem] py-[2rem]">
          <p className="text-white text-center">News Letter</p>
          <div className="flex focus:ring-0 outline-none justify-between items-center bg-white py-[0.3rem] pl-[0.3rem] pr-[0.22rem] rounded-[36px] gap-[0.2rem] w-[17rem] md:w-[20rem]">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="p-2 outline-none border-none focus:ring-0 bg-transparent w-[15rem] text-sm"
              required
            />

            {isLoading ? (
              <div>
                <Loader />
              </div>
            ) : (
              <div
                className="flex justify-center items-center p-[0.7rem] rounded-full bg-[#4A2848] cursor-pointer"
                onClick={handleSubmit}
              >
                <img
                  src="/assets/Footer/sendingIcon.svg"
                  alt=""
                  className="w-[1rem] h-[1rem]"
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-[90%] flex flex-col sm:flex-row flex-wrap justify-between items-center lg:items-start gap-[2rem] md:gap-y-[6rem]">
          <div className="flex flex-col justify-center items-center lg:items-start gap-y-[1.5rem]">
            <a to="/">
              <img
                className="w-[190px] lg:w-[250px] cursor-pointer"
                src="/footer.svg"
                alt="Shararian"
              />
            </a>
            <p class="font-inter font-normal text-[14px] lg:text-[18px] leading-[22px] tracking-[0%] text-white/80 text-center lg:text-start">
              Your trusted partner in pioneering <br />
              IT solutions and services
            </p>
            <div className="flex justify-start items-center gap-x-[1rem]">
              <div className="rounded-full bg-white p-[8px]">
                <img src="/assets/Footer/phone.svg" alt="phone" />
              </div>
              <div className="flex flex-col justify-center items-start gap-[1px] font-inter font-normal text-[14px] lg:text-[18px] leading-[24px] tracking-normal text-white/80">
                <p>Make a Call</p>
                <p>(+92) 3149 694668</p>
                {/* <p>(+44) 7830 740511</p> */}
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col justify-center items-center gap-y-8">
            <div class="font-inter font-bold text-[22px] leading-[24px] tracking-[0] text-white text-center lg:text-start">
              Quick Link
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-y-[1rem]">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Our Services", link: "/services" },
                { name: "Contact us", link: "/contact-us" },
              ].map((d, index) => {
                return (
                  <a
                    href={d.link}
                    key={index}
                    className="flex justify-start items-center gap-3"
                  >
                    <img
                      src="/assets/Footer/DoubleArrow.svg"
                      alt=""
                      className="hidden lg:flex"
                    />
                    <p class="font-inter font-normal text-[14px] lg:text-[18px] leading-[20px] tracking-[0] text-white/80">
                      {d.name}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col justify-center items-center lg:items-start gap-y-8">
            <div class="font-inter font-bold text-[22px] leading-[24px] tracking-[0] text-white text-center lg:text-start">
              Our Services
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-y-[1rem]">
              {[
                {
                  name: "Web Development ",
                  link: "/services/5",
                },
                { name: "IT Consultancy", link: "/services/14" },
                { name: "UI/UX Design", link: "/services/11"  },
                { name: "Bug Fixing", link: "/services/10" },
              ].map((d, index) => {
                return (
                  <a
                    href={d.link}
                    key={index}
                    className="flex justify-start items-center gap-3"
                  >
                    <img
                      src="/assets/Footer/DoubleArrow.svg"
                      alt=""
                      className="hidden lg:flex"
                    />
                    <p class="font-inter font-normal text-[14px] lg:text-[18px] leading-[22px] tracking-[0] text-white/80">
                      {d.name}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col justify-center items-center lg:items-start gap-y-[1.5rem]">
            <div class="font-inter font-bold text-[22px] leading-[24px] tracking-[0] text-white">
              Follow Us
            </div>
            <p class="font-inter font-normal text-[14px] lg:text-[18px] leading-[22px] tracking-[0%] text-white/80 text-center lg:text-start">
              The latest news and articles are sent <br />
              to your inbox weekly.
            </p>
            <div className="flex justify-start items-center gap-x-[0.4rem]">
              <a
                href="https://www.facebook.com/people/Sheraian-Limited/61572149565240/"
                className="w-[36px] h-[36px] rounded-[5px] border-[1px] border-white/50 cursor-pointer flex justify-center items-center"
              >
                <img src="/assets/Footer/Facebook.svg" alt="" />
              </a>
              <a
                href="https://pk.linkedin.com/company/sheraian-limited?trk=public_post_feed-actor-name"
                black
                className="w-[36px] h-[36px] rounded-[5px] border-[1px] border-white/50 cursor-pointer flex justify-center items-center"
              >
                <img src="/assets/Footer/linkedIn.svg" alt="" />
              </a>
              {/* <div className="w-[36px] h-[36px] rounded-[5px] border-[1px] border-white/50 cursor-pointer flex justify-center items-center">
                <img src="/assets/Footer/Pintrist.svg" alt="" />
              </div> */}
              {/* <a
href="https://www.instagram.com/sheraian_limited/"
              className="w-[36px] h-[36px] rounded-[5px] border-[1px] border-white/50 cursor-pointer flex justify-center items-center">
                <img src="/assets/Footer/instagram.svg" alt="" />
              </a> */}
            </div>
            <p class="font-inter font-normal text-[14px] lg:text-[18px] leading-[22px] tracking-[0%] text-white/80 text-center lg:text-start">
              info@sheraian.co.uk
            </p>
          </div>
        </div>
        {/* Reserve */}
        <div className="w-[90%] flex flex-col md:flex-row justify-between items-center font-inter font-normal text-[12px] lg:text-[18px] leading-[18px] lg:leading-[28px] tracking-[0] text-white/80 bg-white/5 py-[1rem] lg:py-[2.5rem] md:py-[2rem] px-[2.3rem] rounded-t-[0.7rem] text-center gap-y-[1rem]">
          <p>
            Copyright 2024 - All Rights Reserved By{" "}
            <span className="cursor-pointer underline text-white">
              <a href="/">Sheraian Limited</a>
            </span>
          </p>
          <div className="flex justify-center items-center gap-5">
            {/* <Link to="/" className="cursor-pointer">
              Privacy Policy
            </Link> */}
            <a to="/contact" className="cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
