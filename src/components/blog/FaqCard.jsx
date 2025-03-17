import { useState } from "react";

const FaqCard = ({ keyId, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  let opener = "Opener.png";
  let closer = "Closer.png";

  return (
    <div className="w-[95%] md:w-[80%] mx-auto flex flex-col items-cenrer bg-white rounded-lg py-8 justify-center border-2 border-[#A8A8A8] transition-all duration-500 ease-in-out transform hover:scale-105">
      <div className="w-[100%] flex flex-row items-center">
        <div className=" md:flex w-[15%] flex items-center justify-center">
          {/* <strong className="text-[1.2rem]">{keyId}</strong> */}
        </div>
        <div className="w-[70%] flex flex-col gap-4">
          <h1 className="font-poppins text-sm font-bold  md:font-semibold md:text-[1.2rem]">
            {title}
          </h1>
          {isOpen && (
            <p className="hidden  md:flex text-[1rem] font-poppins font-normal">
              {description}
            </p>
          )}
        </div>
        <div className="w-[15%] flex items-center justify-center">
          <img
            className="w-[20px] h-[20px] md:w-[35px] md:h-[35px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            src={isOpen ? closer : opener}
            alt="faq-icon"
          />
        </div>
      </div>
      {isOpen && (
      <div className="w-[90%] mx-auto  mt-5 md:mt-0">
            <p className="flex  text-center md:hidden text-[0.8rem] font-poppins font-normal">
              {description}
            </p>
      </div>
          )}
    </div>
  );
};

export default FaqCard;
