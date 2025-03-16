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
    <div className=" px-[70px] py-[26px] bg-white">
      {/* Logo Section */}
      <div>
        <img src="/assets/Navbar/Logo.svg" alt="Shararian" />
      </div>
      {/* Button Section */}
      <div>
        {buttonsData.map((button, index) => {
          return (
            <div key={index} className="">
              <p>{button.title}</p>
              {button.isArrow ? <img src="/assets/Navbar/DropDown.svg" alt="Arrow" /> : null}
            </div>
          );
        })}
      </div>
      {/* Call to Action Button */}
    </div>
  );
};

export default Navbar;
