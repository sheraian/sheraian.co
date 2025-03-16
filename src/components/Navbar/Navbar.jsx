import React from "react";
import Logo from "../../assets/Navbar/Logo.svg";

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
        <img src={Logo} alt="Shararian" />
      </div>
      {/* Button Section */}
      <div>
        {buttonsData.map((button, index) => {
          return (
            <div key={index}>
              <p>{button.title}</p>
              {button.isArrow ? <img /> : null}
            </div>
          );
        })}
      </div>
      {/* Call to Action Button */}
    </div>
  );
};

export default Navbar;
