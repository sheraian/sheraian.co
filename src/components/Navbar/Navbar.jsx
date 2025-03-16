import React from "react";

const buttonsData = [
  {
    title: "Services",
    link: "/",
    isArrow: true,
  },
  {
    title: "Company",
    link: "/",
    isArrow: true,
  },
  {
    title: "Blog",
    link: "/",
    isArrow: false,
  },
  {
    title: "Portfolio",
    link: "/",
    isArrow: false,
  },
  {
    title: "Career",
    link: "/",
    isArrow: false,
  },
  {
    title: "Contact Us",
    link: "/",
    isArrow: false,
  },
];

const Navbar = () => {
  return (
    <div className=" px-[70px] py-[10px] bg-white flex justify-between items-center">
      {/* Logo Section */}
      <div>
        <img src="/assets/Navbar/Logo.svg" alt="Shararian" />
      </div>
      {/* Button Section */}
      <div className="flex justify-center items-center gap-[26px]">
        {buttonsData.map((button, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center gap-[6px] cursor-pointer font-inter font-semibold text-[18px] leading-[100px] tracking-[0%] align-middle group"
            >
              <p>{button.title}</p>
              {button.isArrow ? (
                <img
                  className="mt-[3px] transition-transform duration-300 ease-in-out group-hover:rotate-180"
                  src="/assets/Navbar/DropDown.svg"
                  alt="Arrow"
                />
              ) : null}
            </div>
          );
        })}
      </div>
      {/* Call to Action Button */}
      <div className="flex justify-center items-center gap-[11px] pl-[23px] py-[1px] pr-[1px] bg-[#4A2848] rounded-[35px] cursor-pointer group">
        <p className="font-inter font-semibold text-[18px] leading-[18px] tracking-[0%] align-middle text-white">Get In Touch</p>
        <img
          className="rotate-[45deg] transition-transform duration-300 ease-in-out group-hover:rotate-[-0deg]"
          src="/assets/Navbar/CallToActionArrow.svg"
          alt="Get In Touch"
        />
      </div>
    </div>
  );
};

export default Navbar;
