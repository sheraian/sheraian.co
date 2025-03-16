import React, { useState } from "react";

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

const DropDownData = [
  {
    icone: "/assets/Navbar/gearIcons.svg",
    h_text: "Software Services",
    s_text: "Lorem ipsun sit dlor gym ",
  },
  {
    icone: "/assets/Navbar/gearIcons.svg",
    h_text: "Software Services",
    s_text: "Lorem ipsun sit dlor gym ",
  },
  {
    icone: "/assets/Navbar/gearIcons.svg",
    h_text: "Software Services",
    s_text: "Lorem ipsun sit dlor gym ",
  },
  {
    icone: "/assets/Navbar/gearIcons.svg",
    h_text: "Software Services",
    s_text: "Lorem ipsun sit dlor gym ",
  },
];

// DropDown Component
const DropDownComponent = ({ isVisible }) => {
  return (
    <div
      className={`absolute top-full left-[-38px] mt-[-45px] bg-transparent p-4 transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="ml-[20px] mb-[-5px] w-[35px] h-[20px] bg-white clip-triangle"></div>
      <div className="w-full bg-white rounded-[7px] px-[18px] py-[30px]">
        {/* Text Sections */}
        <div className=""></div>
        {/* Box Section */}
        <div className="flex flex-col gap-[14px]">
          <div className="flex justify-center items-center gap-[13px]">
            {DropDownData.slice(0, 2).map((d, index) => {
              return (
                <div key={index} className="p-[6px] border border-[#00000061] rounded-[9px] flex flex-col justify-center items-start gap-[7.3px]">
                  <div className="bg-[#4A2848] rounded-full flex flex-col justify-center items-center w-[28px] h-[28px]">
                    {/* Icone */}
                    <img src="/assets/Navbar/gearIcons.svg" alt="Icon" className="" />
                  </div>
                  {/* Text */}
                  <div className="w-[140px] flex flex-col gap-2 px-2 py-2">
                    <p className="font-inter font-medium text-[11.13px] leading-[10.91px] tracking-[0%] align-middle w-full">{d.h_text}</p>
                    <p className="font-inter font-medium text-[9.5px] leading-[10.21px] tracking-[0%] align-middle w-full">{d.s_text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-[13px]">
            {DropDownData.slice(-2).map((d, index) => {
              return (
                <div key={index} className="p-[6px] border border-[#00000061] rounded-[9px] flex flex-col justify-center items-start gap-[7.3px]">
                  <div className="bg-[#4A2848] rounded-full flex flex-col justify-center items-center w-[28px] h-[28px]">
                    {/* Icone */}
                    <img src="/assets/Navbar/gearIcons.svg" alt="Icon" className="" />
                  </div>
                  {/* Text */}
                  <div className="w-[140px] flex flex-col gap-2 px-2 py-2">
                    <p className="font-inter font-medium text-[11.13px] leading-[10.91px] tracking-[0%] align-middle w-full">{d.h_text}</p>
                    <p className="font-inter font-medium text-[9.5px] leading-[10.21px] tracking-[0%] align-middle w-full">{d.s_text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="px-[70px] py-[10px] bg-[#f5f5f5] flex justify-between items-center relative">
      {/* Logo Section */}
      <div>
        <img className="cursor-pointer" src="/assets/Navbar/Logo.svg" alt="Shararian" />
      </div>

      {/* Button Section */}
      <div className="flex justify-center items-center gap-[26px]">
        {buttonsData.map((button, index) => {
          return (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => button.isArrow && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex justify-center items-center gap-[6px] cursor-pointer font-inter font-semibold text-[18px] leading-[100px] tracking-[0%] align-middle group">
                <p>{button.title}</p>
                {button.isArrow ? (
                  <img
                    className="mt-[3px] transition-transform duration-300 ease-in-out group-hover:rotate-180"
                    src="/assets/Navbar/DropDown.svg"
                    alt="Arrow"
                  />
                ) : null}
              </div>

              {/* Dropdown Menu */}
              {button.isArrow && <DropDownComponent isVisible={activeDropdown === index} />}
            </div>
          );
        })}
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center items-center gap-[11px] pl-[23px] py-[1px] pr-[1px] bg-[#4A2848] rounded-[35px] cursor-pointer group">
        <p className="font-inter font-semibold text-[18px] leading-[18px] tracking-[0%] align-middle text-white">Get In Touch</p>
        <img
          className="rotate-[225deg] transition-transform duration-300 ease-in-out group-hover:rotate-0"
          src="/assets/Navbar/CallToActionArrow.svg"
          alt="Get In Touch"
        />
      </div>
    </div>
  );
};

export default Navbar;
