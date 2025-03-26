import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const buttonsData = [
  {
    title: "Services",
    // link: "/",
    isArrow: true,
  },
  // {
  //   title: "Company",
  //   // link: "/",
  //   isArrow: true,
  // },
  {
    title: "About Us",
    link: "/about",
    isArrow: false,
  },
  {
    title: "Blog",
    link: "/blogs",
    isArrow: false,
  },
  {
    title: "Portfolio",
    link: "/portfolio",
    isArrow: false,
  },
  {
    title: "Career",
    link: "/career",
    isArrow: false,
  },
  {
    title: "Contact Us",
    link: "/contact-us",
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
const links = [
  { name: "Services", link: "/service" },
  { name: "Case Studies", link: "/case-study" },
  { name: "Job Section", link: "/jobs" },
];
const Drawer = [
  {
    title: "Services",
    link: "/service",
    isArrow: true,
  },
  {
    title: "About Us",
    link: "/about",
    isArrow: false,
  },
  {
    title: "Blog",
    link: "/blogs",
    isArrow: false,
  },
  {
    title: "Jobs",
    link: "/jobs",
    isArrow: false,
  },
  {
    title: "Portfolio",
    link: "/portfolio",
    isArrow: false,
  },
  {
    title: "Career",
    link: "/career",
    isArrow: false,
  },
  { title: "Case Studies", link: "/case-study" },

  {
    title: "Contact Us",
    link: "/contact-us",
    isArrow: false,
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
        <div className=""></div>
        <div className="flex flex-col gap-[14px]">
          <div className="flex flex-col gap-2">
            {links.map((e) => (
              <a
                className="w-full m-0 p-0 group block transition-all duration-300 cursor-pointer"
                href={e.link}
              >
                <h1 className="text-sm font-poppins font-medium text-gray-800 group-hover:text-[#F68E50] transform group-hover:scale-105">
                  {e.name}
                </h1>
              </a>
            ))}
          </div>
          <div className="flex justify-center items-center gap-[13px]">
            {DropDownData.slice(0, 2).map((d, index) => {
              return (
                <Link
                  key={index}
                  className="p-[6px] border border-[#00000061] rounded-[9px] flex flex-col justify-center items-start gap-[7.3px] cursor-pointer"
                  to={"/process"}
                >
                  <div className="bg-[#4A2848] rounded-full flex flex-col justify-center items-center w-[28px] h-[28px]">
                    {/* Icone */}
                    <img
                      src="/assets/Navbar/gearIcons.svg"
                      alt="Icon"
                      className=""
                    />
                  </div>
                  {/* Text */}
                  <div className="w-[140px] flex flex-col gap-2 px-2 py-2">
                    <p className="font-inter font-medium text-[11.13px] leading-[10.91px] tracking-[0%] align-middle w-full">
                      {d.h_text}
                    </p>
                    <p className="font-inter font-medium text-[9.5px] leading-[10.21px] tracking-[0%] align-middle w-full">
                      {d.s_text}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-[13px]">
            {DropDownData.slice(-2).map((d, index) => {
              return (
                <div
                  key={index}
                  className="p-[6px] border border-[#00000061] rounded-[9px] flex flex-col justify-center items-start gap-[7.3px]"
                >
                  <div className="bg-[#4A2848] rounded-full flex flex-col justify-center items-center w-[28px] h-[28px]">
                    <img
                      src="/assets/Navbar/gearIcons.svg"
                      alt="Icon"
                      className=""
                    />
                  </div>
                  <div className="w-[140px] flex flex-col gap-2 px-2 py-2">
                    <p className="font-inter font-medium text-[11.13px] leading-[10.91px] tracking-[0%] align-middle w-full">
                      {d.h_text}
                    </p>
                    <p className="font-inter font-medium text-[9.5px] leading-[10.21px] tracking-[0%] align-middle w-full">
                      {d.s_text}
                    </p>
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
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
      animate={ { y: 0, opacity: 1 } }
      transition={{ type: "spring", stiffness: 100 }}
      className={`w-full bg-[#eaeaea] shadow-xl `}
    >
      <div className="w-[90%] mx-auto py-[10px]  flex justify-between items-center relative">
        <div>
          <Link to="/">
            <img
              className="cursor-pointer"
              src="/assets/Navbar/Logo.svg"
              alt="Shararian"
            />
          </Link>
        </div>

        <div className="hidden justify-center items-center gap-[26px] lg:flex">
          {buttonsData.map((button, index) => {
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => button.isArrow && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={button?.link}
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
                </a>

                {button.isArrow && (
                  <DropDownComponent isVisible={activeDropdown === index} />
                )}
              </div>
            );
          })}
        </div>

        <a
          className="hidden xab:flex justify-center items-center gap-[11px] pl-[23px] py-[1px] pr-[1px] bg-[#4A2848] rounded-[35px] cursor-pointer hover:scale-105 group"
          href="/contact-us"
        >
          <p className="font-inter font-semibold text-[18px] leading-[18px] tracking-[0%] align-middle text-white">
            Get In Touch
          </p>
          <img
            className="rotate-[225deg] transition-transform duration-300 ease-in-out group-hover:rotate-0"
            src="/assets/Navbar/CallToActionArrow.svg"
            alt="Get In Touch"
          />
        </a>
        <motion.i
          className="fas fa-bars text-[1.5rem] flex lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(true)}
        />
      </div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg p-6 z-50"
      >
        <div className="flex items-center justify-between">
          <img src="/assets/Navbar/Logo.svg" alt="Logo" className="w-[150px]" />
          <button className="text-3xl" onClick={() => setIsOpen(false)}>
            &times;
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="mt-10 flex flex-col gap-4">
          {Drawer.map((button, index) => {
            return (
              <li>
                <a
                  href={button.title == "Servics" ? "/service" : button.link}
                  className="text-lg cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {button.title}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
